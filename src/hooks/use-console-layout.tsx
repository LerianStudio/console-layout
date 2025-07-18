'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useOrganization } from '../providers/organization-provider'
import { useSidebar } from '../providers/sidebar-provider'

export interface UseConsoleLayoutOptions {
  /** Custom active item logic */
  isActiveItem?: (href: string, pathname: string) => boolean
  /** Callback when navigation item is clicked */
  onNavigate?: (href: string) => void
  /** Whether to auto-navigate on item click */
  autoNavigate?: boolean
}

export interface UseConsoleLayoutReturn {
  /** Base URL for the main console */
  baseUrl: string
  /** Current pathname */
  pathname: string
  /** Navigation function */
  navigate: (href: string) => void
  /** Check if item is active */
  isActive: (href: string) => boolean
  /** Current organization state */
  organization: {
    current: any
    setOrganization: (org: any) => void
    currentLedger: any
    setLedger: (ledger: any) => void
  }
  /** Sidebar state */
  sidebar: {
    isCollapsed: boolean
    toggle: () => void
    setCollapsed: (collapsed: boolean) => void
  }
}

export const useConsoleLayout = (
  options: UseConsoleLayoutOptions = {}
): UseConsoleLayoutReturn => {
  const { isActiveItem, onNavigate, autoNavigate = true } = options

  const pathname = usePathname()
  const router = useRouter()
  const organization = useOrganization()
  const sidebar = useSidebar()
  const baseUrl =
    process.env.NEXT_PUBLIC_MIDAZ_CONSOLE_BASE_URL || 'http://localhost:8081'

  // Default active item logic
  const defaultIsActive = (href: string, pathname: string) => {
    if (href === '/') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  const checkIsActive = isActiveItem || defaultIsActive

  const navigate = (href: string) => {
    if (onNavigate) {
      onNavigate(href)
    }

    if (autoNavigate) {
      router.push(href)
    }
  }

  const isActive = (href: string) => checkIsActive(href, pathname)

  return {
    baseUrl,
    pathname,
    navigate,
    isActive,
    organization: {
      current: organization.currentOrganization,
      setOrganization: organization.setOrganization,
      currentLedger: organization.currentLedger,
      setLedger: organization.setLedger
    },
    sidebar: {
      isCollapsed: sidebar.isCollapsed,
      toggle: sidebar.toggleSidebar,
      setCollapsed: sidebar.setCollapsed
    }
  }
}

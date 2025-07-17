'use client'

import { useContext } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuItemIcon,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'
import { Book, CircleUser, LogOut } from 'lucide-react'
import { HeaderContext } from '../../providers/header-provider'
import { HeaderContextType } from '../../types/header'
import { useIntl } from '@/lib/intl/use-intl'

export interface UserDropdownProps {
  /**
   * User name to display
   */
  userName?: string
  /**
   * Documentation URL
   */
  docsUrl?: string
  /**
   * Logout handler
   */
  onLogout?: () => void
  /**
   * Support/docs click handler
   */
  onDocsClick?: () => void
}

export const UserDropdown = ({
  userName: propUserName,
  docsUrl: propDocsUrl,
  onLogout: propOnLogout,
  onDocsClick: propOnDocsClick
}: UserDropdownProps) => {
  const intl = useIntl()
  const headerContext = useContext(HeaderContext) as HeaderContextType | null

  // Use context as primary, props as deprecated fallback
  const userName = headerContext?.userName || propUserName || 'User'
  const isAuthEnabled = headerContext?.isAuthEnabled !== false // Default to true if no context

  const handleDocsClick = () => {
    const contextHandler = headerContext?.handlers?.onDocsClick
    const fallbackHandler = propOnDocsClick
    const fallbackUrl = propDocsUrl || 'https://docs.lerian.studio/'

    if (contextHandler) {
      contextHandler()
    } else if (fallbackHandler) {
      fallbackHandler()
    } else {
      window.open(fallbackUrl, '_blank', 'noopener noreferrer')
    }
  }

  const handleLogout = () => {
    const contextHandler = headerContext?.handlers?.onLogout
    const fallbackHandler = propOnLogout

    if (contextHandler) {
      contextHandler()
    } else if (fallbackHandler) {
      fallbackHandler()
    } else {
      // Default logout behavior - could be customized
      console.warn('No logout handler provided to UserDropdown')
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <CircleUser className="text-shadcn-400 h-8 w-8" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[241px]">
        <DropdownMenuLabel>{userName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDocsClick}>
          <DropdownMenuItemIcon>
            <Book />
          </DropdownMenuItemIcon>
          {intl.formatMessage({
            id: 'header.userDropdown.support',
            defaultMessage: 'Support'
          })}
        </DropdownMenuItem>

        {isAuthEnabled && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <DropdownMenuItemIcon>
                <LogOut />
              </DropdownMenuItemIcon>
              {intl.formatMessage({
                id: 'header.userDropdown.logout',
                defaultMessage: 'Logout'
              })}
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

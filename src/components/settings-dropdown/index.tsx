'use client'

import React, { useState } from 'react'
import {
  Building,
  Globe,
  HelpCircle,
  Layers,
  Settings,
  Users
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuItemIcon,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'
import { AboutMidazDialog } from './about-midaz-dialog'
import { Enforce } from '../ui/enforce'
import { useConsoleLayout } from '@/hooks/use-console-layout'
import { useIntl } from '@/lib/intl/use-intl'

export interface SettingsDropdownProps {
  /** Handler for organizations click */
  onOrganizationsClick?: () => void
  /** Handler for users click */
  onUsersClick?: () => void
  /** Handler for applications click */
  onApplicationsClick?: () => void
  /** Handler for system click */
  onSystemClick?: () => void
  /** Handler for about click (if not provided, uses built-in dialog) */
  onAboutClick?: () => void
  /** Permissions for showing menu items */
  permissions?: {
    canViewUsers?: boolean
    canViewApplications?: boolean
  }
}

export const SettingsDropdown = ({
  onOrganizationsClick,
  onUsersClick,
  onApplicationsClick,
  onSystemClick,
  onAboutClick,
  permissions = {
    canViewUsers: true,
    canViewApplications: true
  }
}: SettingsDropdownProps) => {
  const intl = useIntl()
  const { baseUrl } = useConsoleLayout()
  const [aboutOpen, setAboutOpen] = useState(false)

  const handleRedirect = (path: string) => {
    if (!baseUrl) {
      console.error('MIDAZ_CONSOLE_BASE_URL is not configured.')
      return
    }
    window.location.href = `${baseUrl}${path}`
  }

  const handleAboutClick = () => {
    if (onAboutClick) {
      onAboutClick()
    } else {
      setAboutOpen(true)
    }
  }

  return (
    <React.Fragment>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Settings className="text-shadcn-400" size={24} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-[241px]">
          <DropdownMenuLabel>
            {intl.formatMessage({
              id: 'settingsDropdown.settings',
              defaultMessage: 'Settings'
            })}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem
            onClick={
              onOrganizationsClick ||
              (() => handleRedirect('/settings/?tab=organizations'))
            }
          >
            <DropdownMenuItemIcon>
              <Building />
            </DropdownMenuItemIcon>
            {intl.formatMessage({
              id: 'settingsDropdown.organizations',
              defaultMessage: 'Organizations'
            })}
          </DropdownMenuItem>

          <Enforce
            hasPermission={permissions.canViewUsers}
            resource="users"
            action="get"
          >
            <DropdownMenuItem
              onClick={
                onUsersClick || (() => handleRedirect('/settings/?tab=users'))
              }
            >
              <DropdownMenuItemIcon>
                <Users />
              </DropdownMenuItemIcon>
              {intl.formatMessage({
                id: 'settingsDropdown.users',
                defaultMessage: 'Users'
              })}
            </DropdownMenuItem>
          </Enforce>

          <Enforce
            hasPermission={permissions.canViewApplications}
            resource="applications"
            action="get"
          >
            <DropdownMenuItem
              onClick={
                onApplicationsClick ||
                (() => handleRedirect('/settings/?tab=applications'))
              }
            >
              <DropdownMenuItemIcon>
                <Layers />
              </DropdownMenuItemIcon>
              {intl.formatMessage({
                id: 'settingsDropdown.applications',
                defaultMessage: 'Applications'
              })}
            </DropdownMenuItem>
          </Enforce>

          <DropdownMenuItem
            onClick={
              onSystemClick || (() => handleRedirect('/settings/?tab=system'))
            }
          >
            <DropdownMenuItemIcon>
              <Globe />
            </DropdownMenuItemIcon>
            {intl.formatMessage({
              id: 'settingsDropdown.system',
              defaultMessage: 'System'
            })}
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleAboutClick}>
            <DropdownMenuItemIcon>
              <HelpCircle />
            </DropdownMenuItemIcon>
            {intl.formatMessage({
              id: 'settingsDropdown.about',
              defaultMessage: 'About'
            })}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AboutMidazDialog open={aboutOpen} setOpen={setAboutOpen} />
    </React.Fragment>
  )
}

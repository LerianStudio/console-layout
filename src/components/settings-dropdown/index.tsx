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
import { useIntl } from '@/lib/intl/use-intl'
import { useRouter } from 'next/navigation'
import { getRuntimeEnv } from '@/utils/runtime-env-utils'
import { Enforce } from '@/providers/permission-provider/enforce'

export const SettingsDropdown = () => {
  const intl = useIntl()
  const router = useRouter()
  const baseUrl = getRuntimeEnv(
    'NEXT_PUBLIC_MIDAZ_CONSOLE_BASE_URL',
    process.env.NEXT_PUBLIC_MIDAZ_CONSOLE_BASE_URL
  )

  const [open, setOpen] = useState(false)

  const handleClick = (path: string) => {
    if (!baseUrl) {
      console.error('MIDAZ_CONSOLE_BASE_URL is not configured.')
      return
    }
    router.push(`${baseUrl}${path}`)
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
            onClick={() => handleClick('/settings/?tab=organizations')}
          >
            <DropdownMenuItemIcon>
              <Building />
            </DropdownMenuItemIcon>
            {intl.formatMessage({
              id: 'settingsDropdown.organizations',
              defaultMessage: 'Organizations'
            })}
          </DropdownMenuItem>

          <Enforce resource="users" action="get" disabledBehaviour="hide">
            <DropdownMenuItem
              onClick={() => handleClick('/settings/?tab=users')}
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
            resource="applications"
            action="get"
            disabledBehaviour="hide"
          >
            <DropdownMenuItem
              onClick={() => handleClick('/settings/?tab=applications')}
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
            onClick={() => handleClick('/settings/?tab=system')}
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
          <DropdownMenuItem onClick={() => setOpen(true)}>
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

      <AboutMidazDialog open={open} setOpen={setOpen} />
    </React.Fragment>
  )
}

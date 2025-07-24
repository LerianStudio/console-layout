'use client'

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
import { useIntl } from '@/lib/intl/use-intl'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export const UserDropdown = () => {
  const intl = useIntl()
  const router = useRouter()
  const { data: session } = useSession()

  const isAuthEnabled = process.env.PLUGIN_AUTH_ENABLED === 'true'

  const handleDocsClick = () => {
    window.open('https://docs.lerian.studio/', '_blank', 'noopener noreferrer')
  }

  const handleLogout = () => {
    router.push(`${process.env.NEXT_PUBLIC_MIDAZ_CONSOLE_BASE_URL}/signout`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <CircleUser className="text-shadcn-400 h-8 w-8" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[241px]">
        <DropdownMenuLabel>
          {session?.user?.name ??
            intl.formatMessage({
              id: 'header.userDropdown.user',
              defaultMessage: 'User'
            })}
        </DropdownMenuLabel>
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

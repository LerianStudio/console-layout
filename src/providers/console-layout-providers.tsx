import { LocalizationProvider } from '@/lib/intl/localization-provider'
import { QueryProvider } from './query-provider'
import { OrganizationProvider } from './organization-provider'
import { SidebarProvider } from './sidebar-provider'
import { PermissionProvider } from './permission-provider'

export function ConsoleLayoutProviders({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <LocalizationProvider>
      <QueryProvider>
        <OrganizationProvider>
          <PermissionProvider>
            <SidebarProvider>{children}</SidebarProvider>
          </PermissionProvider>
        </OrganizationProvider>
      </QueryProvider>
    </LocalizationProvider>
  )
}

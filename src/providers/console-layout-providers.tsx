import { LocalizationProvider } from '@/lib/intl/localization-provider'
import { QueryProvider } from './query-provider'
import { OrganizationProvider } from './organization-provider'
import { SidebarProvider } from './sidebar-provider'
import { HeaderProvider } from './header-provider'
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
            <SidebarProvider>
              <HeaderProvider>{children}</HeaderProvider>
            </SidebarProvider>
          </PermissionProvider>
        </OrganizationProvider>
      </QueryProvider>
    </LocalizationProvider>
  )
}

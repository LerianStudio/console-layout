import React from 'react'
import { OrganizationProvider } from '@/providers/organization-provider'
import { SidebarProvider } from '@/providers/sidebar-provider'
import { Header } from '../header'
import { PageContent, PageRoot, PageView } from '../page'
import { Sidebar } from '../sidebar'
import { LocalizationProvider } from '@/lib/intl/localization-provider'
import { QueryProvider } from '@/providers/query-provider'
import { PermissionProvider } from '@/providers/permission-provider'

export const ConsoleLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <LocalizationProvider>
      <QueryProvider>
        <OrganizationProvider>
          <PermissionProvider>
            <SidebarProvider>
              <PageRoot>
                <Sidebar />
                <PageView>
                  <Header />
                  <PageContent>{children}</PageContent>
                </PageView>
              </PageRoot>
            </SidebarProvider>
          </PermissionProvider>
        </OrganizationProvider>
      </QueryProvider>
    </LocalizationProvider>
  )
}

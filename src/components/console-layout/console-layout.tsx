import React from 'react'
import { HeaderProvider } from '../../providers/header-provider'
import { OrganizationProvider } from '../../providers/organization-provider'
import { SidebarProvider } from '../../providers/sidebar-provider'
import { Header } from '../header'
import { PageContent, PageRoot, PageView } from '../page'
import { Sidebar } from '../sidebar'
import { LocalizationProvider } from '@/lib/intl/localization-provider'
import { QueryProvider } from '@/providers/query-provider'

export const ConsoleLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <LocalizationProvider>
      <QueryProvider>
        <OrganizationProvider>
          <SidebarProvider>
            <HeaderProvider>
              <PageRoot>
                <Sidebar />
                <PageView>
                  <Header />
                  <PageContent>{children}</PageContent>
                </PageView>
              </PageRoot>
            </HeaderProvider>
          </SidebarProvider>
        </OrganizationProvider>
      </QueryProvider>
    </LocalizationProvider>
  )
}

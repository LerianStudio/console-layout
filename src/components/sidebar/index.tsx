'use client'

import React from 'react'
import {
  ArrowLeftRight,
  Briefcase,
  Coins,
  DollarSign,
  Group,
  Home,
  LibraryBig
} from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import { useGetPluginMenus } from '../../client/plugin-menu'
import { SidebarRoot } from './primitive/sidebar-root'
import {
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupTitle
} from './primitive/sidebar-components'
import { SidebarItem } from './primitive/sidebar-item'
import { SidebarExpandButton } from './primitive/sidebar-expand-button'
import { Separator } from '../ui/separator'
import { useSidebar } from '../../providers/sidebar-provider'
import { useOrganization } from '../../providers/organization-provider'
import { OrganizationSwitcher } from '../organization-switcher'
import { useIntl } from '@/lib/intl/use-intl'
import { getRuntimeEnv } from '@/utils/runtime-env-utils'
import { useGetMidazMenu } from '@/client/midaz-menu'
import { getIcon } from '@/lib/icons'

const Sidebar = () => {
  const { isCollapsed } = useSidebar()
  const intl = useIntl()
  const { data: plugins = [] } = useGetPluginMenus()
  const { data: midazMenu } = useGetMidazMenu()
  const { currentLedger } = useOrganization()
  const [isMobileWidth, setIsMobileWidth] = React.useState(false)
  const baseUrl = getRuntimeEnv(
    'NEXT_PUBLIC_MIDAZ_CONSOLE_BASE_URL',
    process.env.NEXT_PUBLIC_MIDAZ_CONSOLE_BASE_URL
  )

  const enabledPlugins = plugins.filter((plugin) => plugin.enabled)

  // Mobile detection like console
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobileWidth(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isLedgerDisabled = Object.keys(currentLedger).length === 0

  return (
    <SidebarRoot>
      <SidebarHeader>
        <OrganizationSwitcher />
      </SidebarHeader>

      <SidebarContent>
        {midazMenu &&
          midazMenu.length > 0 &&
          midazMenu.map((group) => {
            return (
              <div key={group.id}>
                <SidebarGroup key={group.id}>
                  {group.title && (
                    <SidebarGroupTitle collapsed={isCollapsed}>
                      {group.title}
                    </SidebarGroupTitle>
                  )}

                  {group.items.map((item) => {
                    return (
                      <SidebarItem
                        key={item.name}
                        title={item.title}
                        icon={React.createElement(getIcon(item.icon))}
                        href={`${item.host}${item.route}`}
                        disabled={
                          item.hasLedgerDependencies ? isLedgerDisabled : false
                        }
                      />
                    )
                  })}
                </SidebarGroup>

                {group.showSeparatorAfter && isCollapsed && <Separator />}
              </div>
            )
          })}

        {enabledPlugins.length > 0 && (
          <React.Fragment key="plugins-group">
            <SidebarGroup>
              <SidebarGroupTitle collapsed={isCollapsed}>
                {intl.formatMessage({
                  id: 'common.plugins',
                  defaultMessage: 'Plugins'
                })}
              </SidebarGroupTitle>
              {enabledPlugins.map((plugin) => {
                return (
                  <SidebarItem
                    key={plugin.id}
                    title={plugin.title}
                    icon={React.createElement(getIcon(plugin.icon))}
                    href={`${plugin.host}${plugin.route}${plugin.entry}`}
                  />
                )
              })}
            </SidebarGroup>
          </React.Fragment>
        )}
      </SidebarContent>

      {!isMobileWidth && <SidebarExpandButton />}
    </SidebarRoot>
  )
}

export { Sidebar }
export default Sidebar

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

const Sidebar = () => {
  const { isCollapsed } = useSidebar()
  const intl = useIntl()
  const { data: plugins = [] } = useGetPluginMenus()
  const { currentLedger } = useOrganization()
  const [isMobileWidth, setIsMobileWidth] = React.useState(false)
  const baseUrl =
    process.env.NEXT_PUBLIC_MIDAZ_CONSOLE_BASE_URL || 'http://localhost:8081'

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

  // Determine if ledger is disabled - using currentLedger like console
  const isLedgerDisabled = Object.keys(currentLedger).length === 0

  return (
    <SidebarRoot>
      <SidebarHeader>
        <OrganizationSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarItem
            key="/"
            title={intl.formatMessage({
              id: 'sideBar.home',
              defaultMessage: 'Home'
            })}
            icon={<Home />}
            href={`${baseUrl}/`}
          />

          <SidebarItem
            key="/ledgers"
            title={intl.formatMessage({
              id: 'sideBar.ledgers',
              defaultMessage: 'Ledgers'
            })}
            icon={<LibraryBig />}
            href={`${baseUrl}/ledgers`}
          />
        </SidebarGroup>

        {isCollapsed && <Separator />}

        <SidebarGroup>
          <SidebarGroupTitle collapsed={isCollapsed}>
            {intl.formatMessage({
              id: 'sideBar.ledger.title',
              defaultMessage: 'Ledger'
            })}
          </SidebarGroupTitle>

          <SidebarItem
            key="/assets"
            title={intl.formatMessage({
              id: 'common.assets',
              defaultMessage: 'Assets'
            })}
            icon={<DollarSign />}
            href={`${baseUrl}/assets`}
            disabled={isLedgerDisabled}
          />

          <SidebarItem
            key="/accounts"
            title={intl.formatMessage({
              id: 'sideBar.ledger.accounts',
              defaultMessage: 'Accounts'
            })}
            icon={<Coins />}
            href={`${baseUrl}/accounts`}
            disabled={isLedgerDisabled}
          />

          <SidebarItem
            key="/segments"
            title={intl.formatMessage({
              id: 'common.segments',
              defaultMessage: 'Segments'
            })}
            icon={<Group />}
            href={`${baseUrl}/segments`}
            disabled={isLedgerDisabled}
          />

          <SidebarItem
            key="/portfolios"
            title={intl.formatMessage({
              id: 'sideBar.accountHolders.portfolios',
              defaultMessage: 'Portfolios'
            })}
            icon={<Briefcase />}
            href={`${baseUrl}/portfolios`}
            disabled={isLedgerDisabled}
          />

          <SidebarItem
            key="/transactions"
            title={intl.formatMessage({
              id: 'common.transactions',
              defaultMessage: 'Transactions'
            })}
            icon={<ArrowLeftRight />}
            href={`${baseUrl}/transactions`}
            disabled={isLedgerDisabled}
          />
        </SidebarGroup>

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
                const Icon =
                  (LucideIcons as unknown as Record<string, React.ElementType>)[
                    plugin.icon
                  ] || LucideIcons.Landmark

                return (
                  <SidebarItem
                    key={plugin.id}
                    title={plugin.name}
                    icon={<Icon />}
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

// Configuration
export { configureFetcher } from './client/fetcher'

// Types
export * from './types'

// Providers
export {
  OrganizationProvider,
  useOrganization
} from './providers/organization-provider'
export { SidebarProvider, useSidebar } from './providers/sidebar-provider'
export { QueryProvider as LayoutQueryProvider } from './providers/query-provider'
export { LocalizationProvider as LayoutLocalizationProvider } from './lib/intl/localization-provider'
export { ConsoleLayoutProviders } from './providers/console-layout-providers'
export {
  PermissionProvider,
  usePermissions
} from './providers/permission-provider'

// Components
export { Header } from './components/header'
export * from './components/ledger-selector'
export * from './components/user-dropdown'
export * from './components/settings-dropdown'
export { Enforce } from './providers/permission-provider/enforce'
export { RouteEnforcer } from './providers/permission-provider/route-enforcer'

// Client API Hooks
export * from './client/organizations'
export * from './client/ledgers'
export * from './client/plugin-menu'

// Utilities
export * from './lib/utils'
export * from './lib/env'

// Sidebar Components
export { Sidebar } from './components/sidebar'

// Organization Switcher Components (main component and sub-components)
export * from './components/organization-switcher'
export * from './components/organization-switcher/status'
export * from './components/organization-switcher/popover-panel'
export * from './components/organization-switcher/organization-switcher-trigger'
export * from './components/organization-switcher/organization-switcher-content'

// Hooks
export * from './hooks/use-console-layout'
export * from './hooks/use-auth'

// Auth Redirect
export * from './components/auth-redirect'

// Console Layout
export * from './components/console-layout'

// Main components
export { ConsoleLayout } from './components/console-layout/console-layout'

// Hooks
export { useAuth } from './hooks/use-auth'

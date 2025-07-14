// Configuration
export { configureFetcher } from './client/fetcher'

// Types
export * from './types'
export * from './types/header'

// Providers
export * from './providers/organization-provider'
export * from './providers/sidebar-provider'
export * from './providers/header-provider'

// Components
export * from './components/header'
export * from './components/ledger-selector'
export * from './components/user-dropdown'
export * from './components/settings-dropdown'

// Client API Hooks
export * from './client/organizations'
export * from './client/ledgers'
export * from './client/plugin-menu'

// Utilities
export * from './lib/utils'
export * from './lib/env'

// Sidebar Components
export * from './components/sidebar'

// Organization Switcher Components (main component and sub-components)
export * from './components/organization-switcher'
export * from './components/organization-switcher/status'
export * from './components/organization-switcher/popover-panel'
export * from './components/organization-switcher/organization-switcher-trigger'
export * from './components/organization-switcher/organization-switcher-content'

// Hooks
export * from './hooks/use-console-layout'
export * from './hooks/use-auth'
export * from './hooks/use-header-data'

// Console Layout
export * from './components/console-layout'

// Main components
export { ConsoleLayout } from './components/console-layout/console-layout'

// Providers
export { HeaderProvider } from './providers/header-provider'
export { useOrganization } from './providers/organization-provider'
export { SidebarProvider } from './providers/sidebar-provider'

// Hooks
export { useAuth } from './hooks/use-auth'
export { useHeaderData } from './hooks/use-header-data'

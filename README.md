# @lerianstudio/console-layout

[![NPM Version](https://img.shields.io/npm/v/@lerianstudio/console-layout)](https://npmjs.com/package/@lerianstudio/console-layout)
[![Production Ready](https://img.shields.io/badge/status-production%20ready-green)]()

> **Status**: ✅ Production Ready - Complete layout solution for Midaz plugins

Reusable layout components for Midaz console and plugins, providing a complete Header and Sidebar system with API integration.

## Features

✅ **Complete Header System**

- LedgerSelector with search and filtering
- UserDropdown with profile and logout
- SettingsDropdown with customizable actions

✅ **Complete Sidebar System**

- Responsive collapse/expand behavior
- OrganizationSwitcher integration
- Configurable navigation items
- Plugin support with custom rendering
- Animated transitions and tooltips

✅ **API Integration**

- Configurable fetcher with authentication
- Organizations, Ledgers, and Plugin menu clients
- React Query integration for caching
- Auto-selection of organizations and ledgers

✅ **Complete Layout Integration**

- ConsoleLayout with full configuration
- SimpleConsoleLayout for quick setup
- useConsoleLayout hook for routing and state
- Auto-configuration of API and QueryClient

✅ **State Management**

- OrganizationProvider for org/ledger state
- SidebarProvider for collapse state
- TypeScript support with full type safety

## Installation

```bash
npm install @lerianstudio/console-layout
```

### Peer Dependencies

```bash
npm install react react-dom next next-auth @tanstack/react-query
```

**Required versions:**

- `react >= 19.0.0`
- `react-dom >= 19.0.0`
- `next >= 15.0.0`
- `next-auth >= 4.0.0`
- `@tanstack/react-query >= 5.0.0`

## Quick Start

### 1. Simple Usage (Perfect for Plugins)

```tsx
import { ConsoleLayout } from '@lerianstudio/console-layout'
import '@lerianstudio/console-layout/styles'

function MyPlugin() {
  return (
    <ConsoleLayout>
      <h1>My Plugin Content</h1>
    </ConsoleLayout>
  )
}
```

### 2. Advanced Usage (Full Control)

```tsx
import { ConsoleLayout, useConsoleLayout } from '@lerianstudio/console-layout'
import { Home, Settings } from 'lucide-react'

function MyApp() {
  return (
    <ConsoleLayout
      config={{
        baseUrl: 'http://localhost:3000',
        defaultSidebarCollapsed: false
      }}
      headerProps={{
        version: '1.0.0',
        userDropdownProps: {
          userName: 'John Doe',
          onLogout: () => signOut()
        }
      }}
      sidebarProps={{
        mainItems: [
          { id: 'home', title: 'Home', icon: <Home />, href: '/' },
          {
            id: 'settings',
            title: 'Settings',
            icon: <Settings />,
            href: '/settings'
          }
        ]
      }}
    >
      <MyContent />
    </ConsoleLayout>
  )
}
```

### 3. Using the Layout Hook

```tsx
import { useConsoleLayout } from '@lerianstudio/console-layout'

function MyComponent() {
  const { navigate, isActive, organization, sidebar } = useConsoleLayout()

  return (
    <div>
      <button onClick={() => navigate('/assets')}>Go to Assets</button>
      <button onClick={sidebar.toggle}>Toggle Sidebar</button>
      <p>Current org: {organization.current?.legalName}</p>
    </div>
  )
}
```

### 4. Manual Setup (Individual Components)

```tsx
import {
  Header,
  Sidebar,
  OrganizationProvider,
  SidebarProvider,
  OrganizationSwitcher
} from '@lerianstudio/console-layout'
import { Home, DollarSign, Coins } from 'lucide-react'

function App() {
  return (
    <OrganizationProvider>
      <SidebarProvider>
        <div className="flex h-screen">
          <Sidebar
            headerContent={<OrganizationSwitcher />}
            mainItems={[
              { id: 'home', title: 'Home', icon: <Home />, href: '/' }
            ]}
            ledgerItems={[
              {
                id: 'assets',
                title: 'Assets',
                icon: <DollarSign />,
                href: '/assets'
              },
              {
                id: 'accounts',
                title: 'Accounts',
                icon: <Coins />,
                href: '/accounts'
              }
            ]}
          />
          <div className="flex flex-1 flex-col">
            <Header
              version="1.0.0"
              userDropdownProps={{
                userName: 'John Doe',
                onLogout: () => signOut()
              }}
            />
            <main className="flex-1 p-6">{/* Your content */}</main>
          </div>
        </div>
      </SidebarProvider>
    </OrganizationProvider>
  )
}
```

## Component API

### ConsoleLayout

Main layout component with full configuration options.

```tsx
interface ConsoleLayoutProps {
  config: ConsoleLayoutConfig
  headerProps?: Omit<HeaderProps, 'children'>
  sidebarProps?: Omit<SidebarProps, 'headerContent'>
  organizationSwitcher?: React.ReactNode
  children: React.ReactNode
  className?: string
  showSidebar?: boolean
  showHeader?: boolean
}

interface ConsoleLayoutConfig {
  baseUrl: string
  defaultSidebarCollapsed?: boolean
  useExistingQueryClient?: boolean
  queryClient?: QueryClient
}
```

### SimpleConsoleLayout

Simplified layout with sensible defaults.

```tsx
interface SimpleConsoleLayoutProps {
  baseUrl: string
  version?: string
  userName?: string
  additionalMainItems?: SidebarMenuItemConfig[]
  additionalLedgerItems?: SidebarMenuItemConfig[]
  onLogout?: () => void
  onSettings?: {
    onOrganizationsClick?: () => void
    onUsersClick?: () => void
    // ... more callbacks
  }
  children: React.ReactNode
  text?: {
    /* internationalization overrides */
  }
}
```

### useConsoleLayout Hook

Hook for routing and state management.

```tsx
interface UseConsoleLayoutReturn {
  pathname: string
  navigate: (href: string) => void
  isActive: (href: string) => boolean
  organization: {
    current: OrganizationDto
    setOrganization: (org: OrganizationDto) => void
    currentLedger: LedgerDto
    setLedger: (ledger: LedgerDto) => void
  }
  sidebar: {
    isCollapsed: boolean
    toggle: () => void
    setCollapsed: (collapsed: boolean) => void
  }
  createNavItem: (config: SidebarMenuItemConfig) => SidebarMenuItemConfig
}
```

### Sidebar

Complete sidebar with navigation, organization switcher, and plugin support.

```tsx
interface SidebarProps {
  /** Header content - usually OrganizationSwitcher */
  headerContent?: React.ReactNode
  /** Main navigation items */
  mainItems?: SidebarMenuItemConfig[]
  /** Ledger-specific items that require a selected ledger */
  ledgerItems?: SidebarMenuItemConfig[]
  /** Whether to show plugins section */
  showPlugins?: boolean
  /** Custom plugin renderer */
  renderPlugin?: (plugin: PluginManifestDto) => React.ReactNode | null
  /** Text for sections */
  text?: {
    ledgerSectionTitle?: string
    pluginsSectionTitle?: string
    noLedgerDisabledReason?: string
  }
  /** Whether to show mobile expand button */
  showExpandButton?: boolean
  /** Check if item is active based on pathname */
  isActiveItem?: (href: string, pathname: string) => boolean
}

interface SidebarMenuItemConfig {
  id: string
  title: string
  icon: React.ReactNode
  href: string
  disabled?: boolean
  disabledReason?: string
}
```

### Header

Complete header with ledger selector, user dropdown, and settings.

```tsx
interface HeaderProps {
  version?: string
  locale?: string
  showLedgerSelector?: boolean
  userDropdownProps?: UserDropdownProps
  settingsDropdownProps?: SettingsDropdownProps
}
```

### OrganizationSwitcher

Organization switcher for sidebar header.

```tsx
interface OrganizationSwitcherProps {
  logoAlt?: string
  defaultLogo?: React.ReactNode
  renderOrganizationItem?: (
    organization: OrganizationDto,
    isSelected: boolean,
    onSelect: () => void
  ) => React.ReactNode
}
```

### UserDropdown

```tsx
interface UserDropdownProps {
  userName?: string
  isAuthEnabled?: boolean
  docsUrl?: string
  onLogout?: () => void
  onDocsClick?: () => void
  text?: {
    user?: string
    documentation?: string
    logout?: string
  }
}
```

### SettingsDropdown

```tsx
interface SettingsDropdownProps {
  items?: SettingsDropdownItem[]
  onOrganizationsClick?: () => void
  onUsersClick?: () => void
  onApplicationsClick?: () => void
  onSystemClick?: () => void
  onAboutClick?: () => void
  text?: {
    settings?: string
    organizations?: string
    users?: string
    applications?: string
    system?: string
    about?: string
  }
  permissions?: {
    canViewUsers?: boolean
    canViewApplications?: boolean
  }
}
```

## Advanced Usage

### Custom Sidebar Items

```tsx
const customLedgerItems: SidebarMenuItemConfig[] = [
  {
    id: 'assets',
    title: 'Assets',
    icon: <DollarSign />,
    href: '/assets',
    disabled: !hasLedger,
    disabledReason: 'Select a ledger first'
  }
]

<Sidebar ledgerItems={customLedgerItems} />
```

### Advanced Configuration Example

```tsx
import { ConsoleLayout } from '@lerianstudio/console-layout'

;<ConsoleLayout
  config={{
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
    defaultSidebarCollapsed: false,
    useExistingQueryClient: true
  }}
  headerProps={{
    version: '2.0.0',
    userDropdownProps: {
      userName: user?.name || 'Guest',
      docsUrl: 'https://docs.example.com',
      onLogout: () => authService.logout(),
      onDocsClick: () => window.open('https://docs.example.com')
    },
    settingsDropdownProps: {
      onOrganizationsClick: () => router.push('/settings/organizations'),
      onUsersClick: () => router.push('/settings/users'),
      permissions: {
        canViewUsers: user?.role === 'admin',
        canViewApplications: user?.permissions?.includes('apps:read')
      }
    }
  }}
  sidebarProps={{
    mainItems: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        icon: <BarChart3 />,
        href: '/dashboard'
      },
      {
        id: 'analytics',
        title: 'Analytics',
        icon: <TrendingUp />,
        href: '/analytics'
      }
    ],
    ledgerItems: [
      {
        id: 'transactions',
        title: 'Transactions',
        icon: <ArrowLeftRight />,
        href: '/transactions'
      },
      { id: 'balances', title: 'Balances', icon: <Wallet />, href: '/balances' }
    ],
    showPlugins: true,
    renderPlugin: (plugin) => (
      <CustomPluginItem
        key={plugin.id}
        plugin={plugin}
        onNavigate={(url) => (window.location.href = url)}
      />
    )
  }}
>
  <MyApplication />
</ConsoleLayout>
```

### Custom Plugin Rendering

```tsx
<Sidebar
  renderPlugin={(plugin) => (
    <SidebarItem
      key={plugin.name}
      title={plugin.title}
      icon={<CustomIcon name={plugin.icon} />}
      href={`/plugins${plugin.route}`}
    />
  )}
/>
```

### Custom Active Item Logic

```tsx
<Sidebar
  isActiveItem={(href, pathname) => {
    // Custom logic for determining active state
    return pathname.startsWith(href)
  }}
/>
```

### Internationalization

```tsx
<Sidebar
  text={{
    ledgerSectionTitle: intl.formatMessage({ id: 'sidebar.ledger' }),
    pluginsSectionTitle: intl.formatMessage({ id: 'sidebar.plugins' }),
    noLedgerDisabledReason: intl.formatMessage({ id: 'sidebar.no.ledger' })
  }}
/>

<Header
  userDropdownProps={{
    text: {
      user: intl.formatMessage({ id: 'user' }),
      documentation: intl.formatMessage({ id: 'documentation' }),
      logout: intl.formatMessage({ id: 'logout' })
    }
  }}
/>
```

## Internationalization (i18n)

The library includes a complete internationalization system with:

✅ **Auto-detection**: Automatically detects browser language  
✅ **Fallback chain**: English as universal default  
✅ **Type-safe**: All keys typed in TypeScript  
✅ **Console-exact**: Same keys and messages as console  
✅ **Custom messages**: Allows message overrides  
✅ **Zero breaking**: Works without configuration  
✅ **Small bundle**: Only +3KB in total bundle

### Usage

```tsx
import { useIntl, useLocale } from '@lerianstudio/console-layout'

function MyComponent() {
  const intl = useIntl()
  const { locale, setLocale } = useLocale()

  return (
    <div>
      <p>{intl.formatMessage({ id: 'common.loading' })}</p>
      <button onClick={() => setLocale('pt')}>Português</button>
      <button onClick={() => setLocale('en')}>English</button>
    </div>
  )
}
```

### Available Hooks

- **`useIntl()`**: Access to intl object for message formatting
- **`useLocale()`**: Current locale management and switching

### Supported Languages

- **English (en)**: Default fallback language
- **Portuguese (pt)**: Full translation support
- **Auto-detection**: Based on browser `Accept-Language` header

### Message Overrides

```tsx
<Sidebar
  text={{
    ledgerSectionTitle: intl.formatMessage({ id: 'sidebar.ledger' }),
    pluginsSectionTitle: intl.formatMessage({ id: 'sidebar.plugins' }),
    noLedgerDisabledReason: intl.formatMessage({ id: 'sidebar.no.ledger' })
  }}
/>

<Header
  userDropdownProps={{
    text: {
      user: intl.formatMessage({ id: 'user' }),
      documentation: intl.formatMessage({ id: 'documentation' }),
      logout: intl.formatMessage({ id: 'logout' })
    }
  }}
/>
```

## State Persistence

The library automatically persists:

- **Selected organization**: Stored in localStorage with validation
- **Selected ledger**: Stored in localStorage, cleared when organization changes
- **Sidebar collapse state**: In-memory during session
- **User locale preference**: Stored in cookies

## Plugin Integration

The library automatically discovers and renders plugins from `/api/plugin/menu`:

```tsx
// Each plugin includes: id, name, icon, host, route, entry, enabled
// Icons are dynamically loaded from Lucide React

// Custom plugin rendering
<Sidebar
  renderPlugin={(plugin) => (
    <CustomPluginItem
      key={plugin.id}
      title={plugin.name}
      icon={<LucideIcon name={plugin.icon} />}
      href={`${plugin.host}${plugin.route}${plugin.entry}`}
      enabled={plugin.enabled}
    />
  )}
/>
```

### Plugin Data Structure

```tsx
interface PluginManifestDto {
  id: string
  name: string
  title: string
  description: string
  version: string
  route: string
  icon: string // Lucide React icon name
  enabled: boolean
  entry: string
  healthcheck: string
  host: string
  author: string
}
```

## Styling

The library includes pre-built Tailwind CSS styles. Import the CSS:

```tsx
import '@lerianstudio/console-layout/styles'
```

### CSS Customization

The library uses CSS custom properties for theming:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --shadcn-100: #f4f4f5;
  --shadcn-200: #e4e4e7;
  --shadcn-300: #d4d4d8;
  --shadcn-400: #a1a1aa;
  /* ... more variables */
}
```

### Dark Mode Support

```css
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --card: 222.2 84% 4.9%;
  --card-foreground: 210 40% 98%;
  /* ... dark mode variables */
}
```

## TypeScript

The library is fully typed. Import types as needed:

```tsx
import {
  OrganizationDto,
  LedgerDto,
  PluginManifestDto,
  SidebarMenuItemConfig
} from '@lerianstudio/console-layout'
```

## Build Output

- **ESM**: 31.22 KB (optimized for modern bundlers)
- **CJS**: 40.14 KB (Node.js compatibility)
- **CSS**: 15.70 KB (Tailwind styles)
- **Types**: 23.31 KB (Full TypeScript definitions)

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Test with the demo app
cd test-app && npm run dev
```

## Additional Resources

- [📋 Changelog](./CHANGELOG.md) - Version history and updates
- [🚀 Publishing Guide](./PUBLISHING.md) - How to publish new versions
- [📊 Migration Status](./MIGRATION-STATUS.md) - Complete project status
- [🧪 Test Application](./test-app) - Working demo with examples

## License

MIT

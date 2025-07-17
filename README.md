# @midaz/console-layout

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
npm install @midaz/console-layout
```

### Peer Dependencies

```bash
npm install react react-dom next next-auth @tanstack/react-query
```

## Quick Start

### 1. Simple Usage (Perfect for Plugins)

```tsx
import { ConsoleLayout } from "@midaz/console-layout";
import "@midaz/console-layout/styles";

function MyPlugin() {
  return (
    <ConsoleLayout>
      <h1>My Plugin Content</h1>
    </ConsoleLayout>
  );
}
```

### 2. Advanced Usage (Full Control)

```tsx
import { ConsoleLayout, useConsoleLayout } from "@midaz/console-layout";
import { Home, Settings } from "lucide-react";

function MyApp() {
  return (
    <ConsoleLayout
      config={{
        baseUrl: "http://localhost:3000",
        defaultSidebarCollapsed: false,
      }}
      headerProps={{
        version: "1.0.0",
        userDropdownProps: {
          userName: "John Doe",
          onLogout: () => signOut(),
        },
      }}
      sidebarProps={{
        mainItems: [
          { id: "home", title: "Home", icon: <Home />, href: "/" },
          {
            id: "settings",
            title: "Settings",
            icon: <Settings />,
            href: "/settings",
          },
        ],
      }}
    >
      <MyContent />
    </ConsoleLayout>
  );
}
```

### 3. Using the Layout Hook

```tsx
import { useConsoleLayout } from "@midaz/console-layout";

function MyComponent() {
  const { navigate, isActive, organization, sidebar } = useConsoleLayout();

  return (
    <div>
      <button onClick={() => navigate("/assets")}>Go to Assets</button>
      <button onClick={sidebar.toggle}>Toggle Sidebar</button>
      <p>Current org: {organization.current?.legalName}</p>
    </div>
  );
}
```

### 4. Manual Setup (Individual Components)

```tsx
import {
  Header,
  Sidebar,
  OrganizationProvider,
  SidebarProvider,
  OrganizationSwitcher,
} from "@midaz/console-layout";
import { Home, DollarSign, Coins } from "lucide-react";

function App() {
  return (
    <OrganizationProvider>
      <SidebarProvider>
        <div className="flex h-screen">
          <Sidebar
            headerContent={<OrganizationSwitcher />}
            mainItems={[
              { id: "home", title: "Home", icon: <Home />, href: "/" },
            ]}
            ledgerItems={[
              {
                id: "assets",
                title: "Assets",
                icon: <DollarSign />,
                href: "/assets",
              },
              {
                id: "accounts",
                title: "Accounts",
                icon: <Coins />,
                href: "/accounts",
              },
            ]}
          />
          <div className="flex-1 flex flex-col">
            <Header
              version="1.0.0"
              userDropdownProps={{
                userName: "John Doe",
                onLogout: () => signOut(),
              }}
            />
            <main className="flex-1 p-6">{/* Your content */}</main>
          </div>
        </div>
      </SidebarProvider>
    </OrganizationProvider>
  );
}
```

## Component API

### ConsoleLayout

Main layout component with full configuration options.

```tsx
interface ConsoleLayoutProps {
  config: ConsoleLayoutConfig;
  headerProps?: Omit<HeaderProps, "children">;
  sidebarProps?: Omit<SidebarProps, "headerContent">;
  organizationSwitcher?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  showSidebar?: boolean;
  showHeader?: boolean;
}

interface ConsoleLayoutConfig {
  baseUrl: string;
  defaultSidebarCollapsed?: boolean;
  useExistingQueryClient?: boolean;
  queryClient?: QueryClient;
}
```

### SimpleConsoleLayout

Simplified layout with sensible defaults.

```tsx
interface SimpleConsoleLayoutProps {
  baseUrl: string;
  version?: string;
  userName?: string;
  additionalMainItems?: SidebarMenuItemConfig[];
  additionalLedgerItems?: SidebarMenuItemConfig[];
  onLogout?: () => void;
  onSettings?: {
    onOrganizationsClick?: () => void;
    onUsersClick?: () => void;
    // ... more callbacks
  };
  children: React.ReactNode;
  text?: {
    /* internationalization overrides */
  };
}
```

### useConsoleLayout Hook

Hook for routing and state management.

```tsx
interface UseConsoleLayoutReturn {
  pathname: string;
  navigate: (href: string) => void;
  isActive: (href: string) => boolean;
  organization: {
    current: OrganizationDto;
    setOrganization: (org: OrganizationDto) => void;
    currentLedger: LedgerDto;
    setLedger: (ledger: LedgerDto) => void;
  };
  sidebar: {
    isCollapsed: boolean;
    toggle: () => void;
    setCollapsed: (collapsed: boolean) => void;
  };
  createNavItem: (config: SidebarMenuItemConfig) => SidebarMenuItemConfig;
}
```

### Sidebar

Complete sidebar with navigation, organization switcher, and plugin support.

```tsx
interface SidebarProps {
  /** Header content - usually OrganizationSwitcher */
  headerContent?: React.ReactNode;
  /** Main navigation items */
  mainItems?: SidebarMenuItemConfig[];
  /** Ledger-specific items that require a selected ledger */
  ledgerItems?: SidebarMenuItemConfig[];
  /** Whether to show plugins section */
  showPlugins?: boolean;
  /** Custom plugin renderer */
  renderPlugin?: (plugin: PluginManifestDto) => React.ReactNode | null;
  /** Text for sections */
  text?: {
    ledgerSectionTitle?: string;
    pluginsSectionTitle?: string;
    noLedgerDisabledReason?: string;
  };
  /** Whether to show mobile expand button */
  showExpandButton?: boolean;
  /** Check if item is active based on pathname */
  isActiveItem?: (href: string, pathname: string) => boolean;
}

interface SidebarMenuItemConfig {
  id: string;
  title: string;
  icon: React.ReactNode;
  href: string;
  disabled?: boolean;
  disabledReason?: string;
}
```

### Header

Complete header with ledger selector, user dropdown, and settings.

```tsx
interface HeaderProps {
  version?: string;
  locale?: string;
  showLedgerSelector?: boolean;
  userDropdownProps?: UserDropdownProps;
  settingsDropdownProps?: SettingsDropdownProps;
}
```

### OrganizationSwitcher

Organization switcher for sidebar header.

```tsx
interface OrganizationSwitcherProps {
  logoAlt?: string;
  defaultLogo?: React.ReactNode;
  renderOrganizationItem?: (
    organization: OrganizationDto,
    isSelected: boolean,
    onSelect: () => void
  ) => React.ReactNode;
}
```

### UserDropdown

```tsx
interface UserDropdownProps {
  userName?: string;
  isAuthEnabled?: boolean;
  docsUrl?: string;
  onLogout?: () => void;
  onDocsClick?: () => void;
  text?: {
    user?: string;
    documentation?: string;
    logout?: string;
  };
}
```

### SettingsDropdown

```tsx
interface SettingsDropdownProps {
  items?: SettingsDropdownItem[];
  onOrganizationsClick?: () => void;
  onUsersClick?: () => void;
  onApplicationsClick?: () => void;
  onSystemClick?: () => void;
  onAboutClick?: () => void;
  text?: {
    settings?: string;
    organizations?: string;
    users?: string;
    applications?: string;
    system?: string;
    about?: string;
  };
  permissions?: {
    canViewUsers?: boolean;
    canViewApplications?: boolean;
  };
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
    return pathname.startsWith(href);
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

## Styling

The library includes pre-built Tailwind CSS styles. Import the CSS:

```tsx
import "@midaz/console-layout/styles";
```

Or use your own CSS variables:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  /* ... more variables */
}
```

## TypeScript

The library is fully typed. Import types as needed:

```tsx
import {
  OrganizationDto,
  LedgerDto,
  PluginManifestDto,
  SidebarMenuItemConfig,
} from "@midaz/console-layout";
```

## Build Output

- **ESM**: 28.21 KB (optimized for modern bundlers)
- **CJS**: 36.77 KB (Node.js compatibility)
- **CSS**: 16.19 KB (Tailwind styles)
- **Types**: 19.57 KB (Full TypeScript definitions)

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Test with the demo app
cd test-app && npm run dev
```

## License

MIT

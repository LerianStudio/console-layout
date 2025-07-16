# Changelog

All notable changes to the `@midaz/console-layout` library will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [v1.0.0-beta.5] - 2025-07-16

This release introduces a more efficient npm publish workflow and updates to project dependencies, enhancing deployment reliability and system stability.

### ✨ Features  
- **Streamlined Deployment**: A new npm publish flow has been implemented, simplifying the process of releasing new software versions. This enhancement reduces the likelihood of errors during deployment, making it easier for developers to manage and maintain the project.

### 🔄 Changes
- **Frontend Configuration Update**: Adjustments have been made to the frontend setup to align with the new npm publish process. This change supports future scalability and maintainability, ensuring that updates and new features can be added smoothly.

### 🔧 Maintenance
- **Dependency Updates**: All project dependencies have been updated to their latest versions. This ensures compatibility with the latest security patches and performance improvements, providing a more stable and secure environment for users.
- **Configuration Refinements**: Configuration files have been optimized to support the new deployment workflow, contributing to a cleaner and more efficient codebase. This ongoing maintenance effort enhances the overall developer experience and reduces technical debt.

This changelog highlights the key improvements and updates in version 1.0.0 of the console-layout project, focusing on the benefits and impact for users and developers.

## [0.1.0] - 2024-12-19

### Added - Complete Layout System Migration

This is the initial release of `@midaz/console-layout`, migrated from the Midaz console's internal layout system to a reusable library for plugins.

#### 🎯 **Core Layout Components**

- **ConsoleLayout** - Main layout component with full configuration
- **SimpleConsoleLayout** - Simplified API for quick plugin integration
- **useConsoleLayout** - Hook for routing and state management

#### 📱 **Header System**

- **Header** - Main header component with responsive behavior
- **LedgerSelector** - Dropdown for selecting ledgers with search
- **UserDropdown** - User menu with profile and logout
- **SettingsDropdown** - Settings menu with customizable actions
- **StaticHeader** - Simplified header for auth pages

#### 🎛️ **Sidebar System**

- **Sidebar** - Complete sidebar with navigation and organization switcher
- **OrganizationSwitcher** - Organization selector with auto-selection
- **Sidebar Primitives**:
  - SidebarRoot, SidebarHeader, SidebarContent, SidebarGroup
  - SidebarItem, SidebarItemButton, SidebarItemIconButton
  - SidebarExpandButton with animations and tooltips

#### 🔌 **API Integration**

- **configureFetcher** - Configurable HTTP client with auth support
- **Organizations API** - Full CRUD operations for organizations
- **Ledgers API** - Ledger management with organization scoping
- **Plugin Menu API** - Dynamic plugin discovery and rendering
- **React Query Integration** - Caching and state management

#### 🏗️ **State Management**

- **OrganizationProvider** - Organization and ledger state management
- **SidebarProvider** - Sidebar collapse/expand state
- Auto-selection logic for organizations and ledgers

#### 🎨 **UI Components**

- **Button** - Base button with variants (default, destructive, outline, secondary, ghost, link, activeLink, hoverLink)
- **DropdownMenu** - Complete dropdown system with icons and separators
- **Select** - Select component with search and scroll
- **Separator** - Horizontal/vertical separators
- **Tooltip** - Tooltip system with configurable delays
- **Popover** - Popover system for organization switcher
- **Skeleton** - Loading state component

#### 📦 **Build System**

- **ESM/CJS Support** - Modern ES modules and CommonJS compatibility
- **TypeScript** - Full type safety with comprehensive definitions
- **CSS Processing** - Tailwind CSS with PostCSS optimization
- **Source Maps** - Complete debugging support

#### 🎨 **Styling System**

- **Tailwind CSS** - Complete design system with CSS variables
- **Dark/Light Mode** - CSS variables for theme switching
- **Responsive Design** - Mobile-first responsive behavior
- **Animations** - Framer Motion for smooth transitions

#### 🔧 **Configuration**

- **Flexible API Configuration** - Base URL, auth, and endpoint configuration
- **QueryClient Management** - Optional QueryClient integration
- **Internationalization** - Text overrides for all components
- **Plugin System** - Custom plugin rendering and discovery

#### 📝 **TypeScript Support**

- **Complete Type Definitions** - 23.31 KB of TypeScript definitions
- **Generic Types** - Flexible typing for organizations, ledgers, plugins
- **Interface Exports** - All interfaces available for extension
- **Strict Type Safety** - No `any` types in public APIs

#### 🔍 **Developer Experience**

- **Comprehensive Documentation** - README with examples and API docs
- **Test Application** - Complete demo app showing all features
- **Migration Status** - Detailed migration tracking and status
- **Build Optimization** - Tree-shaking support for optimal bundle sizes

### Build Output

- **ESM**: 31.22 KB (Modern bundlers)
- **CJS**: 40.14 KB (Node.js compatibility)
- **CSS**: 15.70 KB (Tailwind styles)
- **TypeScript**: 23.31 KB (Complete type definitions)

### Dependencies

#### Peer Dependencies

- `react` >= 18.0.0
- `react-dom` >= 18.0.0
- `next` >= 14.0.0

#### Runtime Dependencies

- `@radix-ui/react-dropdown-menu` ^2.1.1
- `@radix-ui/react-popover` ^1.1.1
- `@radix-ui/react-select` ^2.1.1
- `@radix-ui/react-separator` ^1.1.7
- `@radix-ui/react-tooltip` ^1.1.2
- `@tanstack/react-query` ^5.0.0
- `autoprefixer` ^10.4.21
- `class-variance-authority` ^0.7.0
- `clsx` ^2.0.0
- `framer-motion` ^10.18.0
- `lucide-react` ^0.445.0
- `react-intl` ^6.7.0
- `tailwind-merge` ^2.0.0

#### Development Dependencies

- `@types/react` ^18.0.0
- `@types/react-dom` ^18.0.0
- `next-auth` ^4.24.11
- `tsup` ^8.0.0
- `typescript` ^5.0.0

### Usage Examples

#### Quick Start (Plugins)

import { SimpleConsoleLayout } from "@midaz/console-layout";
import "@midaz/console-layout/styles";

<SimpleConsoleLayout
  baseUrl="http://localhost:3000"
  userName="John Doe"
  onLogout={() => signOut()}
>
  <MyContent />
</SimpleConsoleLayout>;

#### Advanced Usage (Full Control)

import { ConsoleLayout, useConsoleLayout } from "@midaz/console-layout";

<ConsoleLayout
  config={{ baseUrl: "http://localhost:3000" }}
  headerProps={{ version: "1.0.0" }}
  sidebarProps={{ mainItems: customItems }}
>
  <MyContent />
</ConsoleLayout>;

#### Hook Usage

const { navigate, organization, sidebar } = useConsoleLayout();

### Migration Notes

This library represents a complete migration of the Midaz console's layout system, maintaining API compatibility while adding plugin support and enhanced configurability.

All components are designed to work seamlessly with the existing console APIs while providing flexibility for plugin development.

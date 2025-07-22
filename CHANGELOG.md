# Changelog

All notable changes to the `@midaz/console-layout` library will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [v1.3.0] - 2025-07-22

This release enhances user role management and improves application reliability, ensuring a more secure and seamless experience.

### ✨ Features  
- **Enhanced User Role Management**: A new permissions provider has been introduced, allowing for more detailed control over user roles and access. This enhancement boosts security and customizability, enabling users to tailor access permissions to their specific needs.

- **Improved Integration**: The OrganizationProvider has been refactored for better dependency management, enhancing the application's scalability and ease of maintenance. This change supports smoother future updates and feature expansions.

### 🐛 Bug Fixes
- **Navigation Improvement**: Fixed an issue with sidebar link construction to ensure that all links correctly include the host and entry point. This fix eliminates broken navigation paths, improving the overall user navigation experience.

### 🔧 Maintenance
- **Documentation Cleanup**: Outdated documentation files related to testing and migration have been removed, streamlining the documentation and reducing potential confusion. This update helps developers easily access accurate and current information.

- **Changelog Update**: The CHANGELOG has been updated to accurately reflect recent changes and improvements, ensuring users and developers stay informed about the latest updates and enhancements.

*Note: There are no breaking changes in this release, ensuring a smooth transition for users without the need for immediate action or adaptation.*

## [v1.3.0-beta.1] - 2025-07-22

This release focuses on enhancing performance and maintaining up-to-date documentation, providing a smoother user experience and streamlined project development.

### ✨ Features
- **Improved Frontend Performance**: The `OrganizationProvider` has been refactored to enhance data handling efficiency within the frontend. Users will experience a smoother interaction with organizational data, resulting in a more responsive application.

### 📚 Documentation
- **Updated Documentation**: Outdated files related to testing and migration have been removed. This cleanup ensures that developers and users have access to accurate and relevant information, facilitating better understanding and usability of the project.

### 🔧 Maintenance
- **Changelog Update**: The CHANGELOG has been updated to reflect recent changes and improvements, making it easier for users and contributors to track the project's evolution and understand the context of updates.

These updates collectively enhance the quality of the codebase and documentation, ensuring a more efficient development process and improved user experience.

## [v1.2.1-beta.2] - 2025-07-21

This release focuses on enhancing the reliability of sidebar navigation and ensuring our documentation is up-to-date, improving user experience and maintaining transparency.

### 🐛 Bug Fixes
- **Improved Sidebar Navigation**: We've enhanced the construction of sidebar links to include both the host and entry point, ensuring consistent and reliable navigation. This fix addresses issues where links might have previously directed users to incorrect or incomplete destinations, enhancing overall usability.

### 📚 Documentation
- **Updated Changelog**: Our changelog has been updated to reflect the latest changes and improvements. This ensures users and developers have access to current information about updates, aiding in version tracking and maintaining transparency.

### 🔧 Maintenance
- **Documentation Maintenance**: Regular updates to our documentation ensure that it accurately reflects the current state of the project, providing clarity and support for users and developers alike.

## [v1.2.1-beta.1] - 2025-07-18

This release focuses on improving the stability and reliability of the build process, ensuring a smoother and more consistent user experience across the application.

### 🐛 Bug Fixes
- **Enhanced Build Reliability**: Resolved an issue that caused inconsistencies in the frontend display and dependency management during the build process. This fix ensures that all components are seamlessly integrated, resulting in a more stable and predictable application behavior. Users will notice improved reliability and fewer disruptions.

This changelog highlights the key bug fix in version 1.2.1, which enhances the overall stability of the application by addressing a critical issue in the build process. Users can expect a more reliable and consistent experience as a result of this update.

## [v1.2.0] - 2025-07-18

This release focuses on enhancing the development experience by improving the build process, ensuring faster and more efficient workflows.

### ⚡ Performance
- **Frontend & Dependencies**: Optimized the compilation process to significantly reduce build times, enhancing the efficiency of development workflows. This improvement ensures a smoother experience for developers working on frontend components, allowing for quicker iterations and reduced waiting times.

### 📚 Documentation
- **Changelog Update**: The project CHANGELOG has been updated to accurately reflect recent changes and improvements, ensuring all stakeholders have access to the latest information. This transparency aids in better project management and keeps everyone informed of the current state of the project.

### 🔧 Maintenance
- **General Maintenance**: Routine updates and maintenance tasks have been performed to keep the project in optimal condition. These behind-the-scenes improvements contribute to the overall stability and reliability of the software.

This changelog highlights the key performance enhancement in the build process and the updated documentation, providing users with a clear understanding of the benefits and improvements in this release.

## [v1.1.0] - 2025-07-17

This release enhances deployment workflows and expands internationalization capabilities, making it easier for developers to publish packages and support a global audience.

### ✨ Features  
- **Streamlined Deployment Process**: Introducing a new npm publish flow that automatically configures default package names. This improvement reduces manual errors and ensures consistent naming conventions, simplifying the deployment process for developers.
  
- **Enhanced Internationalization Support**: A custom internationalization provider has been implemented, allowing applications to offer more flexible and comprehensive localization options. This feature enables developers to cater to a wider audience by easily adapting to different languages and regional settings.

### 📚 Documentation
- Updated the documentation to include new guidelines on the internationalization capabilities and npm publish flow. This ensures developers have the latest information for integrating and utilizing these new features effectively.

### 🔧 Maintenance
- **Dependency Updates**: All project dependencies have been updated to their latest versions, enhancing security and compatibility. This proactive maintenance helps prevent vulnerabilities and ensures the project benefits from the latest improvements in third-party libraries.

- **Changelog Enhancements**: Regular updates to the changelog file have been made to maintain transparency and provide users with a clear record of the project's evolution.

This release focuses on improving developer workflows and broadening application reach, providing significant value through streamlined processes and enhanced global support.

## [v1.0.0-beta.6] - 2025-07-16

This release introduces a streamlined npm publish flow, enhancing the deployment process with a new default package name configuration. These changes aim to improve efficiency and consistency for developers managing multiple packages.

### ✨ Features  
- **Streamlined npm Publishing**: We've introduced a new npm publish flow with a default package name configuration. This enhancement simplifies the deployment process, allowing teams to publish updates more consistently and efficiently. It's particularly beneficial for projects managing multiple packages, ensuring a standardized approach to package naming and distribution.

### 📚 Documentation
- **Changelog Update**: The CHANGELOG has been updated to reflect recent changes and improvements. This ensures that all stakeholders have access to the latest information about the project's progress and modifications, enhancing transparency and communication within the development team and with users.

### 🔧 Maintenance
- **Configuration and Dependencies Update**: Updates to the configuration and dependencies improve the npm publishing workflow. These changes do not require any user action but provide a more streamlined and efficient development process.

This changelog focuses on the user benefits and impact of the changes, highlighting the new features and improvements in a clear and accessible manner. It ensures that users understand the enhancements without needing to delve into technical details.

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

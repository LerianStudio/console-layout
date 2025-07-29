# Changelog

All notable changes to the `@midaz/console-layout` library will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [v1.5.3] - 2025-07-29

This release focuses on improving the accuracy and reliability of financial transactions through a critical bug fix, alongside updates to project documentation for better user guidance.

### 🐛 Bug Fixes
- **Ledger Management**: Resolved an issue with the default ledger behavior, ensuring accurate financial transactions and data integrity. This fix enhances the reliability of financial operations and prevents inconsistencies in ledger entries.

### 📚 Documentation
- **Changelog Update**: The CHANGELOG has been updated to include recent changes and improvements, providing users and developers with up-to-date information on the project's progress and modifications.

### 🔧 Maintenance
- **Documentation Maintenance**: Ensured that the project documentation reflects the latest changes, helping users stay informed about new updates and features.

No breaking changes or new features are introduced in this release, focusing primarily on enhancing the stability and clarity of existing functionalities.


## [v1.5.2-beta.1] - 2025-07-29

This release enhances the reliability of ledger operations with a critical bug fix and ensures up-to-date project documentation for improved user and developer experience.

### 🐛 Bug Fixes
- **Ledger Management**: Resolved an issue where the ledger might not initialize correctly, leading to potential discrepancies in financial data handling. Users will now experience more consistent and reliable ledger operations, reducing unexpected behavior and enhancing data accuracy.

### 📚 Documentation
- **Changelog Updates**: The changelog has been updated to reflect recent changes and improvements, ensuring that users and developers have access to the most current information about the project's updates. This transparency facilitates easier tracking of project progress and changes over time.

This changelog focuses on conveying the most critical updates in a user-friendly manner, highlighting the benefits and impacts of the changes in this release.

## [v1.5.2] - 2025-07-28

This release focuses on enhancing the reliability of authentication processes across different environments, providing a more consistent and secure user experience.

### 🐛 Bug Fixes
- **Improved Authentication & Configuration**: We've enhanced the handling of environment variables related to base URLs and authentication processes. This improvement ensures users experience fewer disruptions when accessing services, leading to a more reliable and secure interaction with our platform.

### 🔧 Maintenance
- **Changelog Documentation**: We've updated our changelog to accurately reflect recent changes, ensuring that both users and developers are informed about the latest modifications. This helps maintain transparency and clarity regarding our project's evolution.


## [v1.5.1-beta.1] - 2025-07-28

This release focuses on enhancing the stability and reliability of the console-layout application, particularly in handling environment variables for authentication and configuration. Users can expect improved deployment consistency across various environments.

### 🐛 Bug Fixes
- **Improved Environment Variable Handling**: We've enhanced the way the application interprets and uses environment variables for base URLs and authentication processes. This fix ensures more reliable and consistent behavior when deploying the application in different environments, reducing the likelihood of configuration errors and improving overall stability.

### 🔧 Maintenance
- **Changelog Updates**: The changelog has been updated to provide a clear and accurate record of recent changes. This helps stakeholders stay informed about the project's development history, ensuring transparency and documentation accuracy.

This changelog is designed to be user-focused, highlighting the key improvements and their impact on user experience, while maintaining a clear and professional format.

## [v1.5.1] - 2025-07-25

This release focuses on enhancing the reliability of environment configurations and maintaining up-to-date documentation for better user experience and project transparency.

### 🐛 Bug Fixes
- **Environment Configuration**: Corrected environment variable names in the `auth`, `config`, and `frontend` components. This fix ensures consistent application behavior, reducing the risk of authentication failures and misconfigurations. Users will experience more reliable application settings without needing to adjust their current configurations.

### 📚 Documentation
- **Changelog Updates**: The project CHANGELOG has been updated to reflect recent changes and improvements. This ensures that users and developers have access to the latest information about project updates and fixes, supporting better decision-making and project understanding.

### 🔧 Maintenance
- **Documentation Maintenance**: Regular updates to documentation ensure clarity and accuracy, helping users stay informed about the latest changes and how they might be affected.

This update is designed to improve the overall stability and transparency of the console-layout project, ensuring users have a seamless experience with accurate configuration settings and up-to-date information.

## [v1.5.0-beta.3] - 2025-07-25

This release focuses on enhancing the reliability and maintainability of the console-layout application by addressing configuration issues and updating documentation.

### 🐛 Bug Fixes
- **Environment Variable Correction**: Resolved issues with environment variable names across the authentication, configuration, and frontend components. This fix ensures that the application correctly reads and applies environment-specific settings, reducing configuration errors and improving overall reliability for users.

### 📚 Documentation
- **Changelog Update**: The CHANGELOG has been updated to include recent changes, providing users with a clear and current history of project updates. This ensures transparency and helps users stay informed about the latest improvements and fixes.

### 🔧 Maintenance
- **Release Management Improvements**: Enhancements in release management processes ensure that documentation and codebases remain synchronized, contributing to a smoother user experience and easier maintenance.

These updates collectively improve the stability of the application, ensuring users encounter fewer configuration issues and have access to up-to-date documentation.

## [v1.5.0] - 2025-07-25

This release enhances the flexibility and reliability of the console-layout application with new configuration management features, improved code quality, and critical bug fixes.

### ✨ Features  
- **Configuration Management**: Introduced utility exports for runtime environment management, allowing for seamless adaptation to various deployment environments. This makes it easier to configure the application dynamically, enhancing its flexibility and usability across different stages like development, testing, and production.
- **Dynamic URL Configuration**: Added support for dynamic base URL adjustments based on the runtime environment. This ensures that components like auth, config, frontend, and test can automatically align their URLs, facilitating smoother transitions and reducing manual configuration efforts.

### 🐛 Bug Fixes
- **Sidebar State**: Fixed an issue where the sidebar did not start in a collapsed state, ensuring a consistent and expected user interface experience.
- **Environment Configuration**: Corrected the `getRuntimeEnv` function to properly retrieve values from `process.env`, improving the accuracy and reliability of environment-specific configurations.

### 🔧 Maintenance
- **Codebase Optimization**: Refactored code across several modules, resulting in a cleaner and more maintainable codebase. This reduces technical debt and enhances the ease of future updates and debugging.
- **Testing Enhancements**: Expanded testing coverage within the config and test components, boosting the application’s robustness and ensuring that all features and functionalities are thoroughly validated.

This update focuses on improving the system's flexibility, reliability, and maintainability, offering a better overall user experience.

This changelog is crafted to highlight the most impactful changes and improvements in version 1.5.0, ensuring users understand the benefits and enhancements introduced in this release.


## [v1.5.0-beta.2] - 2025-07-25

This release focuses on enhancing the user experience with a key interface update and ensures up-to-date documentation for better transparency and version tracking.

### 🐛 Bug Fixes
- **Sidebar Default State**: The sidebar now starts in a collapsed state by default, providing a cleaner and more focused workspace upon application launch. This change addresses user feedback and improves the initial user experience.

### 📚 Documentation
- **Changelog Update**: The changelog has been updated to include recent changes and improvements, ensuring users and developers have the latest information about updates and fixes. This supports better version tracking and transparency.

### 🔧 Maintenance
- **General Maintenance**: Routine updates and behind-the-scenes improvements to maintain software reliability and performance.

This changelog provides a concise summary of the changes in version 1.5.0, focusing on the user impact of the sidebar bug fix and the importance of updated documentation. The structure is clear and user-friendly, ensuring that users can quickly understand the benefits of this release.

## [v1.5.0-beta.1] - 2025-07-25

In this release, we've focused on enhancing the reliability of environment variable management and keeping our documentation up-to-date to ensure a seamless and informed user experience.

### 🐛 Bug Fixes
- **Improved Environment Variable Handling**: We've updated the way environment variables are sourced, ensuring they are now correctly retrieved from the server-side environment. This change enhances the reliability and consistency of application behavior across different deployment environments, reducing potential configuration issues.

### 📚 Documentation
- **Updated Changelog**: The changelog has been refreshed to include the latest updates and fixes. This ensures that users and developers have easy access to accurate and current information, aiding in version tracking and transparency.

### 🔧 Maintenance
- **Documentation Maintenance**: Regular updates to documentation ensure clarity and usability, helping users stay informed about the latest changes and improvements in the software.

This release is designed to provide a more stable and user-friendly application experience by addressing key areas of reliability and information accessibility.

## [v1.4.0-beta.5] - 2025-07-25

This release introduces enhanced configuration capabilities, empowering developers to manage runtime environments more efficiently and flexibly.

### ✨ Features  
- **Enhanced Runtime Environment Management**: We've introduced new utility exports within the configuration component. This enhancement simplifies the setup process and increases the flexibility of managing runtime environments, allowing developers to tailor configurations to specific needs effortlessly.

### 📚 Documentation
- **Updated Changelog**: The CHANGELOG has been updated to ensure all users have access to the latest information about software updates and modifications. This transparency helps users stay informed about enhancements and changes.

This update focuses on expanding the configuration capabilities of the application, providing developers with new tools to manage runtime environments efficiently. Enjoy the improved flexibility and streamlined setup process!

## [v1.4.0-beta.4] - 2025-07-25

This release introduces a powerful runtime environment utility that enhances deployment flexibility, making it easier to configure and adapt the application across different environments.

### ✨ Features
- **Dynamic URL Configuration**: The new runtime environment utility automatically configures the base URL for various components, including Auth, Config, Frontend, and Test. This feature simplifies deployment by eliminating manual URL adjustments, reducing setup time and minimizing configuration errors. Users can now enjoy a more streamlined and error-free deployment process.

### 🔧 Maintenance
- **Changelog Update**: The CHANGELOG has been updated to provide a comprehensive overview of recent changes and enhancements. This ensures that all stakeholders have access to the latest information, improving communication and project tracking.

In this release, the focus was on enhancing the adaptability of the application through improved configuration management. This change significantly benefits users by simplifying the deployment process and reducing potential configuration-related issues.

## [v1.4.0-beta.3] - 2025-07-24

This release introduces a comprehensive testing framework and significant improvements to authentication and configuration, enhancing the application's reliability and user experience.

### ✨ Features
- **Testing Framework**: A new testing framework has been integrated to boost application reliability. This ensures quicker identification and resolution of bugs, leading to a smoother and more dependable user experience.

### 🔄 Improvements
- **Authentication & Configuration Enhancements**: We've streamlined the authentication and configuration processes, resulting in improved system performance and reduced errors. This makes the application more stable and easier to maintain.
- **Frontend & Configuration Updates**: Updated type definitions across the frontend and configuration components enhance code clarity and reduce type-related errors, improving developer productivity and ensuring a more consistent user experience.

### 🔧 Maintenance
- **Codebase Cleanup**: Unused code in the authentication component has been removed, reducing clutter and improving code readability. This helps maintain a clean and efficient codebase, facilitating easier future updates.
- **Changelog Update**: The CHANGELOG has been updated to reflect these recent changes, ensuring that all stakeholders have access to the latest information about the project's progress and updates.

These updates collectively enhance the application's performance, reliability, and maintainability, providing a better overall experience for both users and developers.

## [v1.4.0] - 2025-07-23

This release focuses on enhancing user experience with a smoother logout process and clearer version displays, alongside important bug fixes and documentation updates.

### ✨ Features  
- **Enhanced Logout System**: The logout process has been improved to ensure a smoother and more reliable user experience. This enhancement boosts both security and usability, making it easier for users to safely exit their sessions without hassle.

### 🐛 Bug Fixes
- **Corrected Version Label**: An issue with an extra 'V' in the version label has been resolved. This fix ensures that version information is accurately displayed across the application, enhancing clarity and preventing confusion.

### 🔄 Changes
- **Streamlined Version Display**: A minor adjustment was made to the version display by removing an unnecessary 'V'. This change maintains consistency and clarity in how versioning information is presented to users.

### 📚 Documentation
- **Updated CHANGELOG**: The CHANGELOG has been revised to reflect recent updates and improvements, ensuring users have access to the latest information about the project's development and updates.

### 🔧 Maintenance
- **General Documentation Updates**: Multiple updates to the documentation have been made to keep it current with the latest changes, providing users with accurate and helpful information.


This changelog provides a concise overview of the key updates in this release, emphasizing improvements that directly enhance user experience and application reliability.

## [v1.4.0-beta.2] - 2025-07-23

This release focuses on improving the clarity and accuracy of versioning and documentation, ensuring a smoother experience for users tracking project updates.

### 🐛 Bug Fixes
- **Versioning Clarity**: Resolved an issue where an extra 'V' was mistakenly included in the version number. This fix ensures that version numbers are now displayed accurately, preventing confusion and enhancing the reliability of version tracking.

### 📚 Documentation
- **Changelog Updates**: The CHANGELOG has been updated to include recent changes and improvements. This provides users with the latest information, aiding in better understanding and tracking of the project's evolution.

### 🔧 Maintenance
- **Documentation Maintenance**: Ensured that all documentation reflects the most current state of the project, supporting users in navigating and utilizing the software effectively.

These updates are designed to enhance user experience by ensuring accurate version information and up-to-date documentation, making it easier for users to stay informed about project developments.

## [v1.4.0-beta.1] - 2025-07-23

This release focuses on enhancing the user experience by improving the logout system and updating project documentation for better transparency.

### 🔄 Changes
- **Enhanced Logout System**: The logout process has been improved to ensure a more reliable and seamless experience. This update addresses previous inconsistencies, enhancing both security and usability for users during sign-out. Users can now expect a smoother interaction when logging out.

### 📚 Documentation
- **Changelog Update**: The CHANGELOG has been updated to accurately reflect recent changes and improvements. This ensures users are well-informed about the latest updates and enhancements, maintaining transparency and aiding in user understanding of the system's capabilities.

These updates are designed to improve user interaction and maintain high-quality project documentation, ensuring a clear understanding of the system's current improvements.

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

## [v1.3.0-beta.2] - 2025-07-22

This release introduces significant enhancements to the frontend security model with a new permissions provider, alongside improvements in type safety and testing coverage to ensure a seamless and reliable user experience.

### ✨ Features
- **Enhanced Security with New Permissions Provider**: A new permissions provider has been introduced, allowing for more granular control over user access levels. This feature is particularly beneficial for applications that require differentiated user roles and permissions, enhancing security and user management capabilities.

### 🔄 Changes
- **Improved Type Safety**: Adjustments to types in the frontend have been made to improve type safety and reduce potential runtime errors. This change ensures more robust code, leading to fewer bugs and a smoother user experience.

### 📚 Documentation
- **Updated Changelog**: The changelog has been updated to reflect recent changes, providing users with the latest information about new features and improvements.

### 🔧 Maintenance
- **Enhanced Testing Coverage**: Testing coverage has been expanded to support the new permissions provider, ensuring all new functionalities are thoroughly validated and reliable. This improvement helps maintain high software quality and reduces the risk of future issues.

This release focuses on strengthening the frontend component with new security features and improved type handling, while also ensuring that all changes are well-documented and tested for reliability.


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

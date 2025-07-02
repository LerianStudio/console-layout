// Configuration
export { configureFetcher } from "./client/fetcher";

// Types
export * from "./types";
export * from "./types/header";

// Providers
export * from "./providers/organization-provider";
export * from "./providers/sidebar-provider";
export * from "./providers/header-provider";

// Components
export * from "./components/header";
export * from "./components/ledger-selector";
export * from "./components/user-dropdown";
export * from "./components/settings-dropdown";

// UI Components
export * from "./components/ui/button";
export * from "./components/ui/separator";
export * from "./components/ui/dropdown-menu";
export * from "./components/ui/select";
export * from "./components/ui/tooltip";
export * from "./components/ui/popover";
export * from "./components/ui/skeleton";

// Client API Hooks
export * from "./client/organizations";
export * from "./client/ledgers";
export * from "./client/plugin-menu";

// Utilities
export * from "./lib/utils";
export * from "./lib/env";

// Styles
import "./styles/globals.css";

// Sidebar Components
export * from "./components/sidebar";
export * from "./components/sidebar/primitive";

// Organization Switcher Components (main component and sub-components)
export * from "./components/organization-switcher";
export * from "./components/organization-switcher/status";
export * from "./components/organization-switcher/popover-panel";
export * from "./components/organization-switcher/organization-switcher-trigger";
export * from "./components/organization-switcher/organization-switcher-content";

// Hooks
export * from "./hooks/use-console-layout";
export * from "./hooks/use-auth";
export * from "./hooks/use-header-data";

// Console Layout
export * from "./components/console-layout";

// Main components
export { ConsoleLayout } from "./components/console-layout/console-layout";
export { SimpleConsoleLayout } from "./components/console-layout/simple-console-layout";

// Providers
export { HeaderProvider } from "./providers/header-provider";
export { OrganizationProvider } from "./providers/organization-provider";
export { SidebarProvider } from "./providers/sidebar-provider";

// I18n System
export {
  I18nProvider,
  useI18n,
  detectBrowserLocale,
  isValidLocale,
  getInitialLocale,
} from "./lib/i18n";

export type {
  Locale,
  I18nConfig,
  I18nContextType,
  I18nMessages,
} from "./lib/i18n";

// Hooks
export { useAuth } from "./hooks/use-auth";
export { useHeaderData } from "./hooks/use-header-data";

// Types
export type {
  OrganizationDto,
  LedgerDto,
  PluginManifestDto,
  PaginationDto,
} from "./types";

export type { ConsoleHeaderConfig } from "./types/header";

// Components
export { Header } from "./components/header";
export { Sidebar } from "./components/sidebar";
export { OrganizationSwitcher } from "./components/organization-switcher";
export { UserDropdown } from "./components/user-dropdown";
export { SettingsDropdown } from "./components/settings-dropdown";
export { LedgerSelector } from "./components/ledger-selector";

// UI Components
export { Button } from "./components/ui/button";
export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";

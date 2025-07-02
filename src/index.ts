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
export * from "./components/sidebar/auto-sidebar";

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

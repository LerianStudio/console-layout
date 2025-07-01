"use client";

import { ConsoleLayout } from "@lerian/console-layout";
import {
  Home,
  LibraryBig,
  DollarSign,
  Coins,
  Group,
  Briefcase,
  ArrowLeftRight,
} from "lucide-react";

// Define main navigation items
const mainItems = [
  { id: "home", title: "Home", icon: <Home />, href: "/" },
  { id: "ledgers", title: "Ledgers", icon: <LibraryBig />, href: "/ledgers" },
];

// Define ledger-specific items
const ledgerItems = [
  { id: "assets", title: "Assets", icon: <DollarSign />, href: "/assets" },
  { id: "accounts", title: "Accounts", icon: <Coins />, href: "/accounts" },
  { id: "segments", title: "Segments", icon: <Group />, href: "/segments" },
  {
    id: "portfolios",
    title: "Portfolios",
    icon: <Briefcase />,
    href: "/portfolios",
  },
  {
    id: "transactions",
    title: "Transactions",
    icon: <ArrowLeftRight />,
    href: "/transactions",
  },
];

export default function TestApp() {
  const handleLogout = () => console.log("Logout clicked");
  const handleDocumentationClick = () =>
    window.open("https://docs.midaz.io", "_blank");
  const handleOrganizationsClick = () =>
    console.log("Organizations settings clicked");
  const handleMembersClick = () => console.log("Members settings clicked");

  return (
    <ConsoleLayout
      config={{
        baseUrl: "http://localhost:3000",
        defaultSidebarCollapsed: false,
        useExistingQueryClient: false, // Deixa a lib gerenciar
      }}
      headerProps={{
        version: "1.0.0",
        locale: "en",
        userDropdownProps: {
          userName: "John Doe",
          onLogout: handleLogout,
          onDocsClick: handleDocumentationClick,
          text: {
            user: "User",
            documentation: "Documentation",
            logout: "Sign out",
          },
        },
        settingsDropdownProps: {
          onOrganizationsClick: handleOrganizationsClick,
          onUsersClick: handleMembersClick,
          text: {
            settings: "Settings",
            organizations: "Organizations",
            users: "Members",
          },
        },
      }}
      sidebarProps={{
        mainItems,
        ledgerItems,
        showPlugins: true,
        text: {
          ledgerSectionTitle: "Ledger",
          pluginsSectionTitle: "Plugins",
          noLedgerDisabledReason:
            "No ledger selected. Create a ledger to access these features.",
        },
        showExpandButton: true,
      }}
    >
      {/* Conteúdo da página */}
      <div className="p-6">
        <h1 className="text-3xl font-bold">@midaz/console-layout Test App</h1>
        <div className="grid gap-6">
          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Sidebar Features</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>✅ Responsive collapse/expand behavior</li>
              <li>✅ Organization switcher in header</li>
              <li>✅ Main navigation items</li>
              <li>
                ✅ Ledger-specific items (disabled when no ledger selected)
              </li>
              <li>✅ Plugin support with custom icons</li>
              <li>✅ Tooltip support for collapsed mode</li>
              <li>✅ Animated transitions</li>
            </ul>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Header Features</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>✅ Ledger selector with search and organization filtering</li>
              <li>✅ User dropdown with profile and logout</li>
              <li>✅ Settings dropdown with customizable actions</li>
              <li>✅ Responsive design</li>
              <li>✅ Version display</li>
            </ul>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">API Integration</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>✅ Configurable fetcher with base URL</li>
              <li>✅ Organizations API client</li>
              <li>✅ Ledgers API client</li>
              <li>✅ Plugin menu API client</li>
              <li>✅ React Query integration for caching</li>
              <li>✅ Auto-organization and ledger selection</li>
            </ul>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Try It Out</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">Try these interactions:</p>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li>
                  • Click the collapse/expand button to see sidebar animation
                </li>
                <li>• Hover over items in collapsed mode to see tooltips</li>
                <li>• Click on navigation items to see active states</li>
                <li>• Click the user dropdown to see profile options</li>
                <li>• Click the settings dropdown to see admin actions</li>
                <li>
                  • Try the organization switcher (when multiple orgs available)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ConsoleLayout>
  );
}

"use client";

import { useState } from "react";
import {
  ConsoleLayout,
  SimpleConsoleLayout,
  SidebarMenuItemConfig,
  useConsoleLayout,
} from "@lerian/console-layout";
import {
  Home,
  LibraryBig,
  DollarSign,
  Coins,
  Group,
  Briefcase,
  ArrowLeftRight,
  Settings,
  Users,
  Zap,
} from "lucide-react";

// Content component that uses the layout hook (for inside ConsoleLayout)
function DemoContentWithHook() {
  const layout = useConsoleLayout();

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-6">
          @lerian/console-layout Test App
        </h1>

        <div className="grid gap-6">
          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Current State</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <strong>Pathname:</strong> {layout.pathname}
              </li>
              <li>
                <strong>Sidebar Collapsed:</strong>{" "}
                {layout.sidebar.isCollapsed ? "Yes" : "No"}
              </li>
              <li>
                <strong>Current Organization:</strong>{" "}
                {layout.organization.current?.legalName || "Loading..."}
              </li>
              <li>
                <strong>Current Ledger:</strong>{" "}
                {layout.organization.currentLedger?.name || "None selected"}
              </li>
            </ul>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">
              ConsoleLayout Features
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>✅ Complete Header + Sidebar integration</li>
              <li>✅ OrganizationSwitcher with responsive behavior</li>
              <li>✅ Auto-configuration of API client</li>
              <li>✅ QueryClient management (built-in)</li>
              <li>✅ Responsive layout with collapse/expand</li>
              <li>✅ Plugin support with custom rendering</li>
              <li>✅ TypeScript support with full type safety</li>
            </ul>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Layout Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">ConsoleLayout</h3>
                <p className="text-sm text-muted-foreground">
                  Full control over header, sidebar, and configuration. Perfect
                  for complex applications.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">SimpleConsoleLayout</h3>
                <p className="text-sm text-muted-foreground">
                  Simplified API with sensible defaults. Perfect for plugins and
                  quick setup.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Try It Out</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">Interact with the layout:</p>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li>
                  • Click the collapse/expand button to see sidebar animation
                </li>
                <li>• Hover over items in collapsed mode to see tooltips</li>
                <li>• Click on navigation items to see active states</li>
                <li>
                  • Try the organization switcher (when multiple orgs available)
                </li>
                <li>• Test the user and settings dropdowns</li>
              </ul>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={layout.sidebar.toggle}
                  className="px-3 py-1 bg-primary text-primary-foreground rounded text-sm"
                >
                  Toggle Sidebar
                </button>
                <button
                  onClick={() => layout.navigate("/assets")}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded text-sm"
                >
                  Go to Assets
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple content component (for SimpleConsoleLayout that already provides context)
function DemoContentSimple() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-6">
          @lerian/console-layout Test App (Simple Mode)
        </h1>

        <div className="grid gap-6">
          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">SimpleConsoleLayout</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>✅ One-line integration for plugins</li>
              <li>✅ Sensible defaults for navigation</li>
              <li>✅ Built-in QueryClient management</li>
              <li>✅ Automatic API configuration</li>
              <li>✅ Complete Header + Sidebar system</li>
            </ul>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Perfect for Plugins</h2>
            <p className="text-muted-foreground">
              SimpleConsoleLayout provides everything a plugin needs with
              minimal setup. Just pass your content and callbacks, and you get a
              complete layout system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestApp() {
  const [useSimpleLayout, setUseSimpleLayout] = useState(false);

  // Mock handlers
  const handleLogout = () => {
    console.log("Logout clicked");
    alert("Logout functionality would go here");
  };

  const handleOrganizationsClick = () => {
    console.log("Organizations settings clicked");
    alert("Organizations settings would open here");
  };

  const handleUsersClick = () => {
    console.log("Users settings clicked");
    alert("Users settings would open here");
  };

  // Additional navigation items for demo
  const additionalMainItems: SidebarMenuItemConfig[] = [
    {
      id: "settings",
      title: "Settings",
      icon: <Settings />,
      href: "/settings",
    },
  ];

  const additionalLedgerItems: SidebarMenuItemConfig[] = [
    {
      id: "reports",
      title: "Reports",
      icon: <Zap />,
      href: "/reports",
    },
  ];

  // Toggle between layouts
  const LayoutToggle = () => (
    <div className="fixed top-4 right-4 z-50 bg-background border rounded-lg p-2 shadow-lg">
      <button
        onClick={() => setUseSimpleLayout(!useSimpleLayout)}
        className="px-3 py-1 bg-accent text-accent-foreground rounded text-sm"
      >
        Switch to {useSimpleLayout ? "Full" : "Simple"} Layout
      </button>
    </div>
  );

  if (useSimpleLayout) {
    return (
      <>
        <LayoutToggle />
        <SimpleConsoleLayout
          baseUrl="http://localhost:8081"
          version="1.0.0"
          userName="John Doe"
          additionalMainItems={additionalMainItems}
          additionalLedgerItems={additionalLedgerItems}
          onLogout={handleLogout}
          onSettings={{
            onOrganizationsClick: handleOrganizationsClick,
            onUsersClick: handleUsersClick,
          }}
        >
          <DemoContentSimple />
        </SimpleConsoleLayout>
      </>
    );
  }

  return (
    <>
      <LayoutToggle />
      <ConsoleLayout
        config={{
          baseUrl: "http://localhost:8081",
          defaultSidebarCollapsed: false,
          useExistingQueryClient: false,
        }}
        headerProps={{
          version: "1.0.0",
          userDropdownProps: {
            userName: "John Doe",
            onLogout: handleLogout,
            text: {
              user: "User",
              documentation: "Documentation",
              logout: "Sign out",
            },
          },
          settingsDropdownProps: {
            onOrganizationsClick: handleOrganizationsClick,
            onUsersClick: handleUsersClick,
            text: {
              settings: "Settings",
              organizations: "Organizations",
              users: "Users",
            },
          },
        }}
        sidebarProps={{
          mainItems: [
            {
              id: "home",
              title: "Home",
              icon: <Home />,
              href: "/",
            },
            {
              id: "ledgers",
              title: "Ledgers",
              icon: <LibraryBig />,
              href: "/ledgers",
            },
            ...additionalMainItems,
          ],
          ledgerItems: [
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
            {
              id: "segments",
              title: "Segments",
              icon: <Group />,
              href: "/segments",
            },
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
            ...additionalLedgerItems,
          ],
          text: {
            ledgerSectionTitle: "Ledger",
            pluginsSectionTitle: "Plugins",
            noLedgerDisabledReason:
              "No ledger selected. Create a ledger to access these features.",
          },
        }}
      >
        <DemoContentWithHook />
      </ConsoleLayout>
    </>
  );
}

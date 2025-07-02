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
];

// Define ledger-specific items
const ledgerItems = [
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
];

export default function TestApp() {
  // Mock handlers
  const handleLogout = () => {
    console.log("Logout clicked");
    alert("Logout functionality would go here");
  };

  const handleDocumentationClick = () => {
    console.log("Documentation clicked");
    window.open("https://docs.midaz.io", "_blank");
  };

  const handleOrganizationsClick = () => {
    console.log("Organizations settings clicked");
    alert("Organizations settings would open here");
  };

  const handleMembersClick = () => {
    console.log("Members settings clicked");
    alert("Members settings would open here");
  };

  return (
    <ConsoleLayout
      config={{
        baseUrl: "http://localhost:3000",
        defaultSidebarCollapsed: false,
        useExistingQueryClient: false, // Let the lib manage QueryClient
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
      {/* Page Content */}
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-6">
            @lerian/console-layout Test App
          </h1>

          <div className="grid gap-6">
            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">
                Organization Switcher Features
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>✅ Multiple organizations with avatars</li>
                <li>✅ Fallback to Lerian logo when no avatar</li>
                <li>✅ Status indicators (Active/Inactive)</li>
                <li>✅ Responsive popover with organization details</li>
                <li>✅ Quick switching between organizations</li>
                <li>✅ Settings and edit links</li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Mock API Endpoints</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  ✅ <code>/api/organizations</code> - 4 test organizations
                </li>
                <li>
                  ✅ <code>/api/organizations/[id]</code> - Individual org data
                </li>
                <li>
                  ✅ <code>/api/ledgers</code> - 8 ledgers across organizations
                </li>
                <li>
                  ✅ <code>/api/plugin/menus</code> - 6 plugin menu items
                </li>
                <li>✅ Realistic API delays and pagination</li>
                <li>✅ Organization filtering for ledgers</li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Test Organizations</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Lerian Studio</h3>
                  <p className="text-sm text-muted-foreground">
                    Has avatar, 2 ledgers
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Midaz Technologies</h3>
                  <p className="text-sm text-muted-foreground">
                    No avatar, 3 ledgers
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Digital Banking Corp</h3>
                  <p className="text-sm text-muted-foreground">
                    Onboarding mode, 1 ledger
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">FinTech Solutions</h3>
                  <p className="text-sm text-muted-foreground">
                    Has avatar, 2 ledgers
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Try It Out</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">Try these interactions:</p>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>
                    • Click the organization logo/name to see the switcher
                  </li>
                  <li>• Switch between different organizations</li>
                  <li>
                    • Notice how ledgers change when switching organizations
                  </li>
                  <li>• Check the plugin section for enabled/disabled items</li>
                  <li>
                    • Collapse/expand the sidebar to see responsive behavior
                  </li>
                  <li>• Use the user and settings dropdowns in the header</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConsoleLayout>
  );
}

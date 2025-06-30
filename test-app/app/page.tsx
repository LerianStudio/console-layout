"use client";

import {
  Header,
  Sidebar,
  OrganizationProvider,
  SidebarProvider,
  OrganizationSwitcher,
  configureFetcher,
  SidebarMenuItemConfig,
} from "@midaz/console-layout";
import {
  Home,
  LibraryBig,
  DollarSign,
  Coins,
  Group,
  Briefcase,
  ArrowLeftRight,
} from "lucide-react";

// Configure the API base URL
configureFetcher({
  baseUrl: "http://localhost:3000", // Replace with your API URL
});

// Define main navigation items
const mainItems: SidebarMenuItemConfig[] = [
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
const ledgerItems: SidebarMenuItemConfig[] = [
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
    <OrganizationProvider>
      <SidebarProvider defaultCollapsed={false}>
        <div className="flex h-screen bg-background">
          {/* Sidebar */}
          <Sidebar
            headerContent={<OrganizationSwitcher />}
            mainItems={mainItems}
            ledgerItems={ledgerItems}
            showPlugins={true}
            text={{
              ledgerSectionTitle: "Ledger",
              pluginsSectionTitle: "Plugins",
              noLedgerDisabledReason:
                "No ledger selected. Create a ledger to access these features.",
            }}
            showExpandButton={true}
          />

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <Header
              version="1.0.0"
              locale="en"
              userDropdownProps={{
                userName: "John Doe",
                onLogout: handleLogout,
                onDocsClick: handleDocumentationClick,
                text: {
                  user: "User",
                  documentation: "Documentation",
                  logout: "Sign out",
                },
              }}
              settingsDropdownProps={{
                onOrganizationsClick: handleOrganizationsClick,
                onUsersClick: handleMembersClick,
                text: {
                  settings: "Settings",
                  organizations: "Organizations",
                  users: "Members",
                },
              }}
            />

            {/* Page Content */}
            <main className="flex-1 p-6 overflow-auto">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-foreground mb-6">
                  @midaz/console-layout Test App
                </h1>

                <div className="grid gap-6">
                  <div className="bg-card border rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">
                      Sidebar Features
                    </h2>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>✅ Responsive collapse/expand behavior</li>
                      <li>✅ Organization switcher in header</li>
                      <li>✅ Main navigation items</li>
                      <li>
                        ✅ Ledger-specific items (disabled when no ledger
                        selected)
                      </li>
                      <li>✅ Plugin support with custom icons</li>
                      <li>✅ Tooltip support for collapsed mode</li>
                      <li>✅ Animated transitions</li>
                    </ul>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">
                      Header Features
                    </h2>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        ✅ Ledger selector with search and organization
                        filtering
                      </li>
                      <li>✅ User dropdown with profile and logout</li>
                      <li>✅ Settings dropdown with customizable actions</li>
                      <li>✅ Responsive design</li>
                      <li>✅ Version display</li>
                    </ul>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">
                      API Integration
                    </h2>
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
                      <p className="text-muted-foreground">
                        Try these interactions:
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                        <li>
                          • Click the collapse/expand button to see sidebar
                          animation
                        </li>
                        <li>
                          • Hover over items in collapsed mode to see tooltips
                        </li>
                        <li>
                          • Click on navigation items to see active states
                        </li>
                        <li>
                          • Click the user dropdown to see profile options
                        </li>
                        <li>
                          • Click the settings dropdown to see admin actions
                        </li>
                        <li>
                          • Try the organization switcher (when multiple orgs
                          available)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </OrganizationProvider>
  );
}

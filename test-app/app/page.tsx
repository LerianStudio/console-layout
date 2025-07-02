"use client";

import { ConsoleLayout } from "@lerian/console-layout";

export default function TestApp() {
  return (
    <ConsoleLayout
      config={{
        // baseUrl is auto-detected from NEXT_PUBLIC_MIDAZ_CONSOLE_BASE_URL
        defaultSidebarCollapsed: false,
        useExistingQueryClient: false, // Let the lib manage QueryClient
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
                🎯 Console-Exact Sidebar
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  ✅ Identical to @/console main sidebar - EXACTLY the same code
                </li>
                <li>
                  ✅ Hardcoded navigation items: Home, Ledgers, Assets,
                  Accounts, Segments, Portfolios, Transactions
                </li>
                <li>
                  ✅ Auto-detects current ledger and disables ledger items when
                  Object.keys(currentLedger).length === 0
                </li>
                <li>
                  ✅ Plugin integration uses simple plugin.route (not
                  host+route)
                </li>
                <li>
                  ✅ Hardcoded English text - no environment variables needed!
                </li>
                <li>✅ Same component primitives as console</li>
                <li>✅ Same expand/collapse behavior as console</li>
              </ul>
              <div className="mt-4 p-3 bg-muted rounded-md">
                <p className="text-sm font-medium mb-2">Key Changes Made:</p>
                <div className="space-y-1 text-sm">
                  <p>• Removed useSidebarData hook (too complex)</p>
                  <p>• Removed sidebar-config.ts and url-builder.ts</p>
                  <p>• Removed sidebar env vars from env.ts</p>
                  <p>• Copied exact console sidebar implementation</p>
                  <p>• Hardcoded all text values in English</p>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  💡 Now the sidebar is EXACTLY like the console - zero
                  configuration!
                </p>
              </div>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">
                🔧 Implementation Details
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  ✅ Main Items: Home (/), Ledgers (/ledgers) - always enabled
                </li>
                <li>
                  ✅ Ledger Items: Assets, Accounts, Segments, Portfolios,
                  Transactions - disabled without ledger
                </li>
                <li>
                  ✅ Plugins: From useGetPluginMenus() API, using plugin.route
                  URLs
                </li>
                <li>
                  ✅ Disabled Logic: Object.keys(currentLedger).length === 0
                </li>
                <li>✅ Responsive: Expand button hidden on mobile ( 768px)</li>
                <li>
                  ✅ Separator: Shows when collapsed between main and ledger
                  items
                </li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">
                🎯 Zero Configuration
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  ✅ Auto-detects API URL from{" "}
                  <code>process.env.NEXT_PUBLIC_MIDAZ_CONSOLE_BASE_URL</code>
                </li>
                <li>✅ Auto-detects user from NextAuth session</li>
                <li>✅ Auto-detects version and locale</li>
                <li>✅ Sidebar hardcoded exactly like console</li>
                <li>✅ Default handlers for logout and navigation</li>
                <li>✅ No need to pass headerProps or sidebarProps!</li>
                <li>✅ No environment variables needed for sidebar!</li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">
                Organization Switcher
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
                  <li>
                    • Notice ledger-specific items are disabled without a
                    selected ledger
                  </li>
                  <li>• Behavior should be IDENTICAL to the main console!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConsoleLayout>
  );
}

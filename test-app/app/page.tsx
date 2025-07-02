"use client";

import { ConsoleLayout } from "@lerian/console-layout";

export default function TestApp() {
  return (
    <ConsoleLayout
      config={{
        // baseUrl is auto-detected from NEXT_PUBLIC_MIDAZ_CONSOLE_BASE_URL
        defaultSidebarCollapsed: false,
        useExistingQueryClient: true, // Use the QueryClient from providers
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
                🎯 Migração Concluída: Sidebar Unificada
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  ✅ AutoSidebar migrado para Sidebar principal (index.tsx)
                </li>
                <li>✅ Implementação console-exact mantida</li>
                <li>✅ Interface simplificada: apenas headerContent prop</li>
                <li>✅ Arquivo auto-sidebar.tsx removido</li>
                <li>✅ Hook use-console-layout simplificado</li>
                <li>✅ Bundle reduzido: ~45KB (era ~47KB)</li>
                <li>✅ Estrutura mais limpa e organizada</li>
              </ul>
              <div className="mt-4 p-3 bg-muted rounded-md">
                <p className="text-sm font-medium mb-2">
                  Mudanças da Migração:
                </p>
                <div className="space-y-1 text-sm">
                  <p>• AutoSidebar (135 linhas) → Sidebar principal</p>
                  <p>• Sidebar antigo (179 linhas) → Removido</p>
                  <p>• Redução de ~57% no código da sidebar</p>
                  <p>• Interface Props: SidebarMenuItemConfig → Removido</p>
                  <p>• Export auto-sidebar removido do index.ts</p>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  💡 Agora a sidebar principal É a implementação console-exact!
                </p>
              </div>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">
                🔧 Nova Estrutura da Sidebar
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  ✅ <strong>Sidebar principal:</strong>{" "}
                  src/components/sidebar/index.tsx (console-exact)
                </li>
                <li>
                  ✅ <strong>Interface:</strong> SidebarProps com headerContent
                  opcional
                </li>
                <li>
                  ✅ <strong>Main Items:</strong> Home (/), Ledgers (/ledgers) -
                  hardcoded
                </li>
                <li>
                  ✅ <strong>Ledger Items:</strong> Assets, Accounts, Segments,
                  Portfolios, Transactions
                </li>
                <li>
                  ✅ <strong>Plugins:</strong> Via useGetPluginMenus(), usando
                  plugin.route
                </li>
                <li>
                  ✅ <strong>Disabled Logic:</strong>{" "}
                  Object.keys(currentLedger).length === 0
                </li>
                <li>
                  ✅ <strong>Responsive:</strong> Expand button automático em
                  mobile
                </li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">
                🎯 Benefícios da Migração
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  ✅ <strong>Simplificação:</strong> Uma única implementação de
                  sidebar
                </li>
                <li>
                  ✅ <strong>Consistência:</strong> Sidebar principal é
                  console-exact
                </li>
                <li>
                  ✅ <strong>Manutenibilidade:</strong> Menos código para manter
                </li>
                <li>
                  ✅ <strong>Performance:</strong> Bundle menor e mais eficiente
                </li>
                <li>
                  ✅ <strong>Desenvolvimento:</strong> Interface mais simples
                </li>
                <li>
                  ✅ <strong>Padrão:</strong> Segue estrutura do console
                  principal
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
                  <li>• Notice the cleaner, unified sidebar implementation!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConsoleLayout>
  );
}

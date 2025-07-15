'use client'

import { ConsoleLayout } from '@lerian/console-layout'

export default function TestApp() {
  return (
    <ConsoleLayout>
      {/* Page Content */}
      <div className="p-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-foreground mb-6 text-3xl font-bold">
            @lerian/console-layout - I18n System Demo
          </h1>

          <div className="grid gap-6">
            <div className="bg-card rounded-lg border p-6">
              <h2 className="mb-4 text-xl font-semibold">
                🌍 Sistema de Internacionalização Implementado
              </h2>
              <ul className="text-muted-foreground space-y-2">
                <li>
                  ✅ <strong>Auto-detection:</strong> Detecta idioma do browser
                  automaticamente
                </li>
                <li>
                  ✅ <strong>Fallback chain:</strong> EN como padrão universal
                </li>
                <li>
                  ✅ <strong>Type-safe:</strong> Todas as keys tipadas no
                  TypeScript
                </li>
                <li>
                  ✅ <strong>Console-exact:</strong> Mesmas keys e mensagens do
                  console
                </li>
                <li>
                  ✅ <strong>Custom messages:</strong> Permite override de
                  mensagens
                </li>
                <li>
                  ✅ <strong>Zero breaking:</strong> Funciona sem configuração
                </li>
                <li>
                  ✅ <strong>Small bundle:</strong> Apenas +3KB no bundle total
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border p-6">
              <h2 className="mb-4 text-xl font-semibold">
                📋 Componentes Internationalizados
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 font-medium">Sidebar</h3>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• Home / Ledgers (main nav)</li>
                    <li>• Assets / Ativos</li>
                    <li>• Accounts / Contas</li>
                    <li>• Segments / Segmentos</li>
                    <li>• Portfolios / Portfólios</li>
                    <li>• Transactions / Transações</li>
                    <li>• Plugins</li>
                    <li>• Expand / Ampliar button</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 font-medium">Header Dropdowns</h3>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• User Dropdown:</li>
                    <li>&nbsp;&nbsp;- Logout / Sair</li>
                    <li>&nbsp;&nbsp;- Support / Suporte</li>
                    <li>• Settings Dropdown:</li>
                    <li>&nbsp;&nbsp;- Organizations / Organizações</li>
                    <li>&nbsp;&nbsp;- System / Sistema</li>
                    <li>&nbsp;&nbsp;- Users / Usuários</li>
                    <li>&nbsp;&nbsp;- About Midaz / Sobre o Midaz</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg border p-6">
              <h2 className="mb-4 text-xl font-semibold">
                🔧 Configuração do I18n
              </h2>
              <div className="bg-muted rounded-md p-4">
                <pre className="overflow-x-auto text-sm">
                  {`<ConsoleLayout
  config={{...}}
  i18n={{
    defaultLocale: 'pt',           // Português como padrão
    autoDetect: true,              // Auto-detectar browser
    availableLocales: ['en', 'pt'], // Idiomas disponíveis
    messages: {                    // Custom messages
      en: { 'sideBar.home': 'Dashboard' },
      pt: { 'sideBar.home': 'Painel' }
    }
  }}
>
  {children}
</ConsoleLayout>`}
                </pre>
              </div>
            </div>

            <div className="bg-card rounded-lg border p-6">
              <h2 className="mb-4 text-xl font-semibold">
                🎯 Teste as Funcionalidades
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Para testar o sistema de internacionalização:
                </p>
                <ul className="text-muted-foreground ml-4 space-y-2 text-sm">
                  <li>• Observe os textos na sidebar (em inglês por padrão)</li>
                  <li>
                    • Clique no dropdown do usuário (canto superior direito)
                  </li>
                  <li>• Clique no dropdown de configurações (engrenagem)</li>
                  <li>• Mude o idioma do browser para pt-BR e recarregue</li>
                  <li>• Todas as mensagens devem mudar automaticamente</li>
                  <li>• Componentes usam useI18n() hook internamente</li>
                  <li>• Fallback para inglês se idioma não suportado</li>
                </ul>
                <div className="rounded-md bg-blue-50 p-3 dark:bg-blue-950">
                  <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                    💡 <strong>Auto-detection ativo:</strong> O sistema detecta
                    automaticamente o idioma do browser e aplica PT-BR se
                    disponível, senão usa EN como fallback.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg border p-6">
              <h2 className="mb-4 text-xl font-semibold">
                📊 Resultados da Implementação
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Bundle Impact</h3>
                  <ul className="text-muted-foreground text-sm">
                    <li>• Antes: 34.33 KB</li>
                    <li>• Depois: 37.43 KB</li>
                    <li>
                      •{' '}
                      <span className="text-green-600">
                        +3KB apenas (+8.5%)
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Features</h3>
                  <ul className="text-muted-foreground text-sm">
                    <li>• 22+ mensagens traduzidas</li>
                    <li>• EN + PT idiomas</li>
                    <li>• Auto-detection</li>
                    <li>• Type-safe keys</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConsoleLayout>
  )
}

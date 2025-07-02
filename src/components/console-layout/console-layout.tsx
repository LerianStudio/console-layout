"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "../header";
import { Sidebar } from "../sidebar";
import { OrganizationProvider } from "../../providers/organization-provider";
import { SidebarProvider } from "../../providers/sidebar-provider";
import { HeaderProvider } from "../../providers/header-provider";
import { I18nProvider } from "../../lib/i18n";
import { OrganizationSwitcher } from "../organization-switcher";
import { configureFetcher } from "../../client/fetcher";
import { ConsoleHeaderConfig } from "../../types/header";
import type { I18nConfig } from "../../lib/i18n";

export interface ConsoleLayoutConfig {
  /** Optional API base URL override. If not provided, will use NEXT_PUBLIC_MIDAZ_CONSOLE_BASE_URL env var */
  baseUrl?: string;
  /** Default sidebar collapsed state */
  defaultSidebarCollapsed?: boolean;
  /** Whether to create a new QueryClient or use existing */
  useExistingQueryClient?: boolean;
  /** Custom QueryClient instance */
  queryClient?: QueryClient;
}

export interface ConsoleLayoutProps {
  /** Layout configuration */
  config: ConsoleLayoutConfig;
  /** Header configuration */
  header?: ConsoleHeaderConfig;
  /** I18n configuration */
  i18n?: I18nConfig;
  /** Custom organization switcher */
  organizationSwitcher?: React.ReactNode;
  /** Main content */
  children: React.ReactNode;
  /** Custom container className */
  className?: string;
  /** Whether to show the sidebar */
  showSidebar?: boolean;
  /** Whether to show the header */
  showHeader?: boolean;
}

// Default QueryClient instance
const defaultQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

export const ConsoleLayout = ({
  config,
  header,
  i18n,
  organizationSwitcher,
  children,
  className = "",
  showSidebar = true,
  showHeader = true,
}: ConsoleLayoutProps) => {
  // Configure the fetcher with baseUrl (auto-detected if not provided)
  React.useEffect(() => {
    configureFetcher({ baseUrl: config.baseUrl });
  }, [config.baseUrl]);

  const queryClient = config.useExistingQueryClient
    ? config.queryClient || defaultQueryClient
    : defaultQueryClient;

  const defaultOrgSwitcher = organizationSwitcher || <OrganizationSwitcher />;

  const content = (
    <I18nProvider config={i18n}>
      <OrganizationProvider>
        <SidebarProvider defaultCollapsed={config.defaultSidebarCollapsed}>
          <HeaderProvider config={header}>
            <div className={`flex h-screen bg-background ${className}`}>
              {/* Auto-configured Sidebar */}
              {showSidebar && <Sidebar />}

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col min-w-0">
                {/* Header */}
                {showHeader && <Header showLedgerSelector={true} />}

                {/* Page Content */}
                <main className="flex-1 overflow-auto">{children}</main>
              </div>
            </div>
          </HeaderProvider>
        </SidebarProvider>
      </OrganizationProvider>
    </I18nProvider>
  );

  // Wrap with QueryClient if not using existing one
  if (!config.useExistingQueryClient) {
    return (
      <QueryClientProvider client={queryClient}>{content}</QueryClientProvider>
    );
  }

  return content;
};

"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header, HeaderProps } from "../header";
import { Sidebar, SidebarProps } from "../sidebar";
import { OrganizationProvider } from "../../providers/organization-provider";
import { SidebarProvider } from "../../providers/sidebar-provider";
import { OrganizationSwitcher } from "../organization-switcher";
import { configureFetcher } from "../../client/fetcher";

export interface ConsoleLayoutConfig {
  /** API base URL */
  baseUrl: string;
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
  /** Header props */
  headerProps?: Omit<HeaderProps, "children">;
  /** Sidebar props */
  sidebarProps?: Omit<SidebarProps, "headerContent">;
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
  headerProps = {},
  sidebarProps = {},
  organizationSwitcher,
  children,
  className = "",
  showSidebar = true,
  showHeader = true,
}: ConsoleLayoutProps) => {
  // Configure the fetcher with the base URL
  React.useEffect(() => {
    configureFetcher({ baseUrl: config.baseUrl });
  }, [config.baseUrl]);

  const queryClient = config.useExistingQueryClient
    ? config.queryClient || defaultQueryClient
    : defaultQueryClient;

  const defaultOrgSwitcher = organizationSwitcher || <OrganizationSwitcher />;

  const content = (
    <OrganizationProvider>
      <SidebarProvider defaultCollapsed={config.defaultSidebarCollapsed}>
        <div className={`flex h-screen bg-background ${className}`}>
          {/* Sidebar */}
          {showSidebar && (
            <Sidebar
              headerContent={defaultOrgSwitcher}
              showPlugins={true}
              showExpandButton={true}
              {...sidebarProps}
            />
          )}

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Header */}
            {showHeader && (
              <Header showLedgerSelector={true} {...headerProps} />
            )}

            {/* Page Content */}
            <main className="flex-1 overflow-auto">{children}</main>
          </div>
        </div>
      </SidebarProvider>
    </OrganizationProvider>
  );

  // Wrap with QueryClient if not using existing one
  if (!config.useExistingQueryClient) {
    return (
      <QueryClientProvider client={queryClient}>{content}</QueryClientProvider>
    );
  }

  return content;
};

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { I18nProvider } from "../../lib/i18n";
import { HeaderProvider } from "../../providers/header-provider";
import { OrganizationProvider } from "../../providers/organization-provider";
import { SidebarProvider } from "../../providers/sidebar-provider";
import { Header } from "../header";
import { PageContent, PageRoot, PageView } from "../page";
import { Sidebar } from "../sidebar";

export interface ConsoleLayoutProps {
  children: React.ReactNode;
}

const defaultQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

export const ConsoleLayout = ({ children }: ConsoleLayoutProps) => {
  return (
    <QueryClientProvider client={defaultQueryClient}>
      <I18nProvider>
        <OrganizationProvider>
          <SidebarProvider>
            <HeaderProvider>
              <PageRoot>
                <Sidebar />
                <PageView>
                  <Header />
                  <PageContent>{children}</PageContent>
                </PageView>
              </PageRoot>
            </HeaderProvider>
          </SidebarProvider>
        </OrganizationProvider>
      </I18nProvider>
    </QueryClientProvider>
  );
};

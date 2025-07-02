"use client";

import React from "react";
import { ConsoleLayout, ConsoleLayoutProps } from "./console-layout";
import { SidebarMenuItemConfig } from "../sidebar";
import {
  Home,
  LibraryBig,
  DollarSign,
  Coins,
  Group,
  Briefcase,
  ArrowLeftRight,
} from "lucide-react";

export interface SimpleConsoleLayoutProps {
  /** API base URL override (optional, uses env var by default) */
  baseUrl?: string;
  /** App version to display in header */
  version?: string;
  /** User name for dropdown */
  userName?: string;
  /** Additional main navigation items */
  additionalMainItems?: SidebarMenuItemConfig[];
  /** Additional ledger-specific items */
  additionalLedgerItems?: SidebarMenuItemConfig[];
  /** Logout callback */
  onLogout?: () => void;
  /** Settings callbacks */
  onSettings?: {
    onOrganizationsClick?: () => void;
    onUsersClick?: () => void;
    onApplicationsClick?: () => void;
    onSystemClick?: () => void;
    onAboutClick?: () => void;
  };
  /** Content to render */
  children: React.ReactNode;
  /** Override text for internationalization */
  text?: {
    // Sidebar texts
    home?: string;
    ledgers?: string;
    assets?: string;
    accounts?: string;
    segments?: string;
    portfolios?: string;
    transactions?: string;
    ledgerSection?: string;
    pluginsSection?: string;
    // Header texts
    midazConsole?: string;
    user?: string;
    documentation?: string;
    logout?: string;
    settings?: string;
    organizations?: string;
    users?: string;
    applications?: string;
    system?: string;
    about?: string;
  };
}

export const SimpleConsoleLayout = ({
  baseUrl,
  version = "1.0.0",
  userName,
  additionalMainItems = [],
  additionalLedgerItems = [],
  onLogout,
  onSettings = {},
  children,
  text = {},
}: SimpleConsoleLayoutProps) => {
  // Default main navigation items
  const defaultMainItems: SidebarMenuItemConfig[] = [
    {
      id: "home",
      title: text.home || "Home",
      icon: <Home />,
      href: "/",
    },
    {
      id: "ledgers",
      title: text.ledgers || "Ledgers",
      icon: <LibraryBig />,
      href: "/ledgers",
    },
  ];

  // Default ledger-specific items
  const defaultLedgerItems: SidebarMenuItemConfig[] = [
    {
      id: "assets",
      title: text.assets || "Assets",
      icon: <DollarSign />,
      href: "/assets",
    },
    {
      id: "accounts",
      title: text.accounts || "Accounts",
      icon: <Coins />,
      href: "/accounts",
    },
    {
      id: "segments",
      title: text.segments || "Segments",
      icon: <Group />,
      href: "/segments",
    },
    {
      id: "portfolios",
      title: text.portfolios || "Portfolios",
      icon: <Briefcase />,
      href: "/portfolios",
    },
    {
      id: "transactions",
      title: text.transactions || "Transactions",
      icon: <ArrowLeftRight />,
      href: "/transactions",
    },
  ];

  const consoleLayoutProps: ConsoleLayoutProps = {
    config: {
      baseUrl,
      defaultSidebarCollapsed: false,
      useExistingQueryClient: false,
    },
    header: {
      version,
      user: userName ? { name: userName } : undefined,
      text: {
        midazConsole: text.midazConsole,
        user: text.user,
        documentation: text.documentation,
        logout: text.logout,
        settings: text.settings,
        organizations: text.organizations,
        users: text.users,
        applications: text.applications,
        system: text.system,
        about: text.about,
      },
    },
    sidebarProps: {
      mainItems: [...defaultMainItems, ...additionalMainItems],
      ledgerItems: [...defaultLedgerItems, ...additionalLedgerItems],
      text: {
        ledgerSectionTitle: text.ledgerSection || "Ledger",
        pluginsSectionTitle: text.pluginsSection || "Plugins",
      },
    },
    children,
  };

  return <ConsoleLayout {...consoleLayoutProps} />;
};

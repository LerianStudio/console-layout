"use client";

import React from "react";
import { ConsoleLayout, ConsoleLayoutProps } from "./console-layout";

export interface SimpleConsoleLayoutProps {
  /** API base URL override (optional, uses env var by default) */
  baseUrl?: string;
  /** App version to display in header */
  version?: string;
  /** User name for dropdown */
  userName?: string;
  /** Content to render */
  children: React.ReactNode;
  /** Override text for header internationalization */
  text?: {
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
  children,
  text = {},
}: SimpleConsoleLayoutProps) => {
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
    children,
  };

  return <ConsoleLayout {...consoleLayoutProps} />;
};

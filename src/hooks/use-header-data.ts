"use client";

import { useMemo } from "react";
import { useAuth } from "./use-auth";
import {
  getHeaderUrls,
  getHeaderDefaults,
  getConsoleBaseUrl,
} from "../lib/env";
import { ConsoleHeaderConfig } from "../types/header";
import { useGetMidazInfo } from "../client/midaz-info";

export const useHeaderData = (config?: ConsoleHeaderConfig) => {
  const auth = useAuth();
  const { data: midazInfo, isLoading: isVersionLoading } = useGetMidazInfo();

  // Auto-detect version
  const version = useMemo(() => {
    if (config?.version) return config.version;
    if (isVersionLoading) return "..."; // Loading state
    return midazInfo?.version || " "; // Fallback to empty space
  }, [config?.version, midazInfo, isVersionLoading]);

  // Auto-detect locale
  const locale = useMemo(() => {
    if (config?.locale) return config.locale;
    const defaults = getHeaderDefaults();
    if (defaults.locale !== "auto") return defaults.locale;

    // Auto-detect from browser
    if (typeof window !== "undefined") {
      return navigator.language.split("-")[0].toUpperCase();
    }
    return "EN";
  }, [config?.locale]);

  // Default handlers for microfrontend scenario
  const handlers = useMemo(() => {
    const urls = getHeaderUrls();
    const baseUrl = getConsoleBaseUrl();

    return {
      // Logout with baseUrl + NextAuth (combines cookie clearing + microfrontend redirect)
      onLogout: () => {
        const signinUrl = `${baseUrl}${urls.signin}`;
        auth.logout(signinUrl);
      },
      // Redirect to main console application (microfrontend)
      onOrganizationsClick: () => {
        window.location.href = `${baseUrl}${urls.organizations}`;
      },
      onUsersClick: () => {
        window.location.href = `${baseUrl}${urls.users}`;
      },
      onApplicationsClick: () => {
        window.location.href = `${baseUrl}${urls.applications}`;
      },
      onSystemClick: () => {
        window.location.href = `${baseUrl}${urls.system}`;
      },
      // About uses internal dialog (no redirect)
      onAboutClick: undefined,
      onDocsClick: () => {
        const docsUrl = config?.user?.docsUrl || urls.documentation;
        window.open(docsUrl, "_blank", "noopener noreferrer");
      },
    };
  }, [auth.logout, config?.user?.docsUrl]);

  return {
    version,
    locale,
    userName: config?.user?.name || auth.userName || "User",
    handlers,
    isAuthEnabled: getHeaderDefaults().authEnabled,
  };
};

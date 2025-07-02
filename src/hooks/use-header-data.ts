"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./use-auth";
import { getHeaderUrls, getHeaderDefaults } from "../lib/env";
import { ConsoleHeaderConfig } from "../types/header";

export const useHeaderData = (config?: ConsoleHeaderConfig) => {
  const auth = useAuth();
  const router = useRouter();

  // Auto-detect version
  const version = useMemo(() => {
    if (config?.version) return config.version;
    const defaults = getHeaderDefaults();
    if (defaults.version !== "auto") return defaults.version;

    // Try to detect version from package.json or other sources
    // For now, return a default version
    return "1.0.0";
  }, [config?.version]);

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

  // Default handlers
  const handlers = useMemo(() => {
    const urls = getHeaderUrls();

    return {
      onLogout: () => auth.logout(),
      onOrganizationsClick: () => router.push(urls.organizations),
      onUsersClick: () => router.push(urls.users),
      onApplicationsClick: () => router.push(urls.applications),
      onSystemClick: () => router.push(urls.system),
      onAboutClick: () => router.push(urls.about),
      onDocsClick: () => {
        const docsUrl = config?.user?.docsUrl || urls.documentation;
        window.open(docsUrl, "_blank", "noopener noreferrer");
      },
    };
  }, [auth.logout, router, config?.user?.docsUrl]);

  return {
    version,
    locale,
    userName: config?.user?.name || auth.userName || "User",
    handlers,
    isAuthEnabled: getHeaderDefaults().authEnabled,
  };
};

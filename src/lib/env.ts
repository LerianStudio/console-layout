/**
 * Environment variables and default configuration for Console Header
 */

/**
 * Gets the base URL for the main console application in microfrontend scenarios
 * This ensures plugins redirect to the main console for settings pages
 */
export const getConsoleBaseUrl = (): string => {
  const envBaseUrl = process.env.NEXT_PUBLIC_MIDAZ_CONSOLE_BASE_URL;

  if (envBaseUrl) {
    return envBaseUrl.endsWith("/") ? envBaseUrl.slice(0, -1) : envBaseUrl;
  }

  // Fallback para desenvolvimento
  return "http://localhost:3000";
};

export const getHeaderUrls = () => ({
  organizations:
    process.env.NEXT_PUBLIC_MIDAZ_CONSOLE_URLS_ORGANIZATIONS ||
    "/settings/organizations",
  users: process.env.NEXT_PUBLIC_MIDAZ_CONSOLE_URLS_USERS || "/settings/users",
  applications:
    process.env.NEXT_PUBLIC_MIDAZ_CONSOLE_URLS_APPLICATIONS ||
    "/settings/applications",
  system:
    process.env.NEXT_PUBLIC_MIDAZ_CONSOLE_URLS_SYSTEM || "/settings/system",
  about: process.env.NEXT_PUBLIC_MIDAZ_CONSOLE_URLS_ABOUT || "/about",
  documentation:
    process.env.NEXT_PUBLIC_MIDAZ_CONSOLE_URLS_DOCS || "https://docs.midaz.io",
  signin: process.env.NEXT_PUBLIC_MIDAZ_CONSOLE_SIGNIN_URL || "/signin",
});

export const getHeaderDefaults = () => ({
  version: process.env.NEXT_PUBLIC_MIDAZ_CONSOLE_VERSION || "auto",
  locale: process.env.NEXT_PUBLIC_MIDAZ_CONSOLE_LOCALE || "auto",
  authEnabled: process.env.NEXT_PUBLIC_MIDAZ_AUTH_ENABLED !== "false",
});

export const getHeaderText = () => ({
  midazConsole: process.env.NEXT_PUBLIC_MIDAZ_CONSOLE_TITLE || "Midaz Console",
  user: "User",
  settings: "Settings",
  organizations: "Organizations",
  users: "Users",
  applications: "Applications",
  system: "System",
  about: "About Midaz",
  documentation: "Documentation Hub",
  logout: "Logout",
});

export const getHeaderPermissions = () => ({
  canViewUsers:
    process.env.NEXT_PUBLIC_MIDAZ_CONSOLE_CAN_VIEW_USERS !== "false",
  canViewApplications:
    process.env.NEXT_PUBLIC_MIDAZ_CONSOLE_CAN_VIEW_APPLICATIONS !== "false",
});

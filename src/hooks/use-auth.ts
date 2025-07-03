"use client";

import { useSession, signOut } from "next-auth/react";
import { getHeaderUrls, getConsoleBaseUrl } from "../lib/env";

export const useAuth = () => {
  const { data: session, status } = useSession();

  const handleLogout = (callbackUrl?: string) => {
    const urls = getHeaderUrls();
    const baseUrl = getConsoleBaseUrl();

    // Use baseUrl + signin if no custom callbackUrl provided
    // This ensures logout always redirects to main console in microfrontend scenarios
    const finalCallbackUrl = callbackUrl || `${baseUrl}${urls.signin}`;

    signOut({ callbackUrl: finalCallbackUrl });
  };

  return {
    session,
    isLoading: status === "loading",
    isAuthenticated: status === "authenticated",
    user: session?.user,
    userName: session?.user?.name,
    logout: handleLogout,
  };
};

"use client";

import { useSession, signOut } from "next-auth/react";
import { getHeaderUrls } from "../lib/env";

export const useAuth = () => {
  const { data: session, status } = useSession();

  const handleLogout = (callbackUrl?: string) => {
    const finalCallbackUrl = callbackUrl || getHeaderUrls().signin;
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

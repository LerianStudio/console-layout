"use client";

import React, { createContext, useContext } from "react";
import { useHeaderData } from "../hooks/use-header-data";
import { getHeaderUrls, getHeaderText, getHeaderPermissions } from "../lib/env";
import { ConsoleHeaderConfig, HeaderContextType } from "../types/header";

const HeaderContext = createContext<HeaderContextType | null>(null);

export const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeaderContext must be used within HeaderProvider");
  }
  return context;
};

export interface HeaderProviderProps {
  children: React.ReactNode;
  config?: ConsoleHeaderConfig;
}

export const HeaderProvider = ({ children, config }: HeaderProviderProps) => {
  const headerData = useHeaderData(config);

  const contextValue: HeaderContextType = {
    version: headerData.version,
    locale: headerData.locale,
    userName: headerData.userName,
    handlers: headerData.handlers,
    urls: getHeaderUrls(),
    text: {
      ...getHeaderText(),
      ...config?.text,
    },
    permissions: {
      ...getHeaderPermissions(),
      ...config?.permissions,
    },
  };

  return (
    <HeaderContext.Provider value={contextValue}>
      {children}
    </HeaderContext.Provider>
  );
};

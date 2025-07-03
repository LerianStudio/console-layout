"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import type {
  Locale,
  I18nConfig,
  I18nContextType,
  I18nMessages,
} from "./types";
import { enMessages } from "./messages/en";
import { ptMessages } from "./messages/pt";
import { getInitialLocale } from "./utils";

// Create context
const I18nContext = createContext<I18nContextType | null>(null);

// Default messages
const defaultMessages = {
  en: enMessages,
  pt: ptMessages,
};

interface I18nProviderProps {
  config?: I18nConfig;
  children: React.ReactNode;
}

export const I18nProvider = ({ config, children }: I18nProviderProps) => {
  // Initialize locale
  const initialLocale = useMemo(
    () => getInitialLocale(config?.defaultLocale, config?.autoDetect ?? true),
    [config?.defaultLocale, config?.autoDetect]
  );

  const [locale, setLocale] = useState<Locale>(initialLocale);

  // Available locales
  const availableLocales = useMemo<Locale[]>(
    () => config?.availableLocales ?? ["en", "pt"],
    [config?.availableLocales]
  );

  // Get messages for current locale
  const messages = useMemo<I18nMessages>(() => {
    const baseMessages = defaultMessages[locale];
    const customMessages = config?.messages?.[locale];

    // Merge custom messages with default messages
    return customMessages
      ? { ...baseMessages, ...customMessages }
      : baseMessages;
  }, [locale, config?.messages]);

  // Format message function
  const formatMessage = useCallback(
    (key: keyof I18nMessages): string => {
      return messages[key] ?? key;
    },
    [messages]
  );

  // Locale setter with validation
  const handleSetLocale = useCallback(
    (newLocale: Locale) => {
      if (availableLocales.includes(newLocale)) {
        setLocale(newLocale);
      }
    },
    [availableLocales]
  );

  const contextValue = useMemo<I18nContextType>(
    () => ({
      locale,
      availableLocales,
      formatMessage,
      setLocale: handleSetLocale,
      messages,
    }),
    [locale, availableLocales, formatMessage, handleSetLocale, messages]
  );

  return (
    <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>
  );
};

// Custom hook to use i18n context
export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }

  return context;
};

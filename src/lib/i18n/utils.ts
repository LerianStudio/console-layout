import type { Locale } from "./types";

/**
 * Auto-detect browser locale
 */
export const detectBrowserLocale = (): Locale => {
  if (typeof window === "undefined") {
    return "en"; // Server-side fallback
  }

  const browserLocale = window.navigator.language.toLowerCase();

  // Check for exact matches first
  if (browserLocale === "pt-br" || browserLocale === "pt") {
    return "pt";
  }

  // Default to English for all other cases
  return "en";
};

/**
 * Validate if locale is supported
 */
export const isValidLocale = (locale: string): locale is Locale => {
  return locale === "en" || locale === "pt";
};

/**
 * Get locale from various sources with fallback chain
 */
export const getInitialLocale = (
  defaultLocale?: Locale,
  autoDetect: boolean = true
): Locale => {
  // 1. Use provided default locale if valid
  if (defaultLocale && isValidLocale(defaultLocale)) {
    return defaultLocale;
  }

  // 2. Auto-detect from browser if enabled
  if (autoDetect) {
    return detectBrowserLocale();
  }

  // 3. Final fallback to English
  return "en";
};

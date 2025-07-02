// Main exports
export { I18nProvider, useI18n } from "./provider";

// Types
export type {
  Locale,
  I18nConfig,
  I18nContextType,
  I18nMessages,
} from "./types";

// Messages
export { enMessages } from "./messages/en";
export { ptMessages } from "./messages/pt";

// Utilities
export { detectBrowserLocale, isValidLocale, getInitialLocale } from "./utils";

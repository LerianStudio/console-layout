export type Locale = "en" | "pt";

export interface I18nMessages {
  // Sidebar messages - Main navigation
  "sideBar.home": string;
  "sideBar.ledgers": string;

  // Sidebar messages - Ledger section
  "sideBar.ledger.title": string;
  "sideBar.ledger.accounts": string;
  "sideBar.accountHolders.portfolios": string;

  // Common messages used in sidebar
  "common.assets": string;
  "common.segments": string;
  "common.transactions": string;
  "common.expand": string;
  "common.plugins": string;

  // Sidebar specific
  "sidebar.disabled.reason": string;

  // Header - User dropdown messages
  "header.userDropdown.logout": string;
  "header.userDropdown.profile": string;
  "header.userDropdown.subscription": string;
  "header.userDropdown.support": string;

  // Settings dropdown messages
  "settingsDropdown.organizations": string;
  "settingsDropdown.settings": string;
  "settingsDropdown.system": string;
  "settingsDropdown.security": string;
  "settingsDropdown.about": string;
  "settingsDropdown.users": string;
  "settingsDropdown.applications": string;
}

export interface I18nConfig {
  /** Default locale */
  defaultLocale?: Locale;
  /** Available locales */
  availableLocales?: Locale[];
  /** Custom messages override */
  messages?: Partial<Record<Locale, Partial<I18nMessages>>>;
  /** Auto-detect browser locale */
  autoDetect?: boolean;
}

export interface I18nContextType {
  /** Current locale */
  locale: Locale;
  /** Available locales */
  availableLocales: Locale[];
  /** Format message function */
  formatMessage: (key: keyof I18nMessages) => string;
  /** Change locale function */
  setLocale: (locale: Locale) => void;
  /** All messages for current locale */
  messages: I18nMessages;
}

export interface ConsoleHeaderConfig {
  /** Override version detection */
  version?: string;
  /** Override locale detection */
  locale?: string;
  /** User configuration */
  user?: {
    name?: string;
    docsUrl?: string;
  };
  /** Navigation URLs override */
  urls?: {
    organizations?: string;
    users?: string;
    applications?: string;
    system?: string;
    about?: string;
    documentation?: string;
    signin?: string;
  };
  /** Text overrides for internationalization */
  text?: {
    midazConsole?: string;
    user?: string;
    settings?: string;
    organizations?: string;
    users?: string;
    applications?: string;
    system?: string;
    about?: string;
    documentation?: string;
    logout?: string;
  };
  /** Feature permissions */
  permissions?: {
    canViewUsers?: boolean;
    canViewApplications?: boolean;
  };
}

export interface HeaderContextType {
  version: string;
  locale: string;
  userName: string;
  handlers: {
    onLogout: () => void;
    onOrganizationsClick: () => void;
    onUsersClick: () => void;
    onApplicationsClick: () => void;
    onSystemClick: () => void;
    onAboutClick?: () => void;
    onDocsClick: () => void;
  };
  urls: {
    organizations: string;
    users: string;
    applications: string;
    system: string;
    about: string;
    documentation: string;
    signin: string;
  };
  text: Required<NonNullable<ConsoleHeaderConfig["text"]>>;
  permissions: Required<NonNullable<ConsoleHeaderConfig["permissions"]>>;
}

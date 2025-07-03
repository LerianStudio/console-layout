"use client";

import React from "react";
import { Separator } from "../ui/separator";
import { LedgerSelector } from "../ledger-selector";
import { UserDropdown } from "../user-dropdown";
import { SettingsDropdown } from "../settings-dropdown";
import { useI18n } from "../../lib/i18n";
import { useHeaderContext } from "../../providers/header-provider";

export interface HeaderProps {
  /**
   * Custom className for header container
   */
  className?: string;
  /**
   * Whether to show the ledger selector
   */
  showLedgerSelector?: boolean;
  /**
   * Version override (if not provided, will auto-detect from context)
   */
  version?: string;
}

export const Header = ({
  className,
  showLedgerSelector = true,
  version,
}: HeaderProps) => {
  const headerContext = useHeaderContext();
  const { locale } = useI18n();

  // Use version from props or context
  const displayVersion = version || headerContext.version;

  return (
    <div
      className={`flex h-[60px] w-full items-center border-b bg-white py-5 pr-16 ${
        className || ""
      }`}
    >
      <nav className="flex w-full items-center justify-between gap-4 pl-16">
        {showLedgerSelector && <LedgerSelector />}

        <div className="flex items-center gap-6">
          <p className="text-xs font-medium text-zinc-400">
            {headerContext.text.midazConsole}{" "}
            <span className="text-xs font-normal text-zinc-400">
              v.{displayVersion}
            </span>
          </p>

          <Separator orientation="vertical" className="h-10" />

          <p className="text-xs font-normal text-zinc-400">
            {locale.toUpperCase()}
          </p>

          <SettingsDropdown
            onOrganizationsClick={headerContext.handlers.onOrganizationsClick}
            onUsersClick={headerContext.handlers.onUsersClick}
            onApplicationsClick={headerContext.handlers.onApplicationsClick}
            onSystemClick={headerContext.handlers.onSystemClick}
            onAboutClick={headerContext.handlers.onAboutClick}
            permissions={headerContext.permissions}
            aboutDialog={{
              version: headerContext.version,
            }}
          />
          <UserDropdown
            userName={headerContext.userName}
            docsUrl={headerContext.urls.documentation}
            onLogout={headerContext.handlers.onLogout}
            onDocsClick={headerContext.handlers.onDocsClick}
          />
        </div>
      </nav>
    </div>
  );
};

export interface StaticHeaderProps {
  /**
   * Logo image source
   */
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  /**
   * Header title
   */
  title?: string;
  /**
   * Custom className for header container
   */
  className?: string;
}

export const StaticHeader = ({
  logo,
  title = "Midaz Console",
  className,
}: StaticHeaderProps) => {
  return (
    <div
      className={`flex w-full items-center justify-center border-b bg-white py-6 ${
        className || ""
      }`}
    >
      <nav className="flex w-full max-w-[1090px] items-center gap-4">
        {logo && (
          <img
            src={logo.src}
            alt={logo.alt}
            height={logo.height || 40}
            width={logo.width || 40}
            className="rounded-lg"
          />
        )}

        <div className="flex text-base text-zinc-800">{title}</div>
      </nav>
    </div>
  );
};

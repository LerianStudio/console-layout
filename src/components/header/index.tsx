"use client";

import React from "react";
import { Separator } from "../ui/separator";
import { LedgerSelector } from "../ledger-selector";
import { UserDropdown } from "../user-dropdown";
import { SettingsDropdown } from "../settings-dropdown";
import { useI18n } from "../../lib/i18n";

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
   * Version override (if not provided, will auto-detect)
   */
  version?: string;
  /**
   * User configuration
   */
  user?: {
    name?: string;
    docsUrl?: string;
    onLogout?: () => void;
    onDocsClick?: () => void;
  };
  /**
   * Settings handlers
   */
  settings?: {
    onOrganizationsClick?: () => void;
    onUsersClick?: () => void;
    onApplicationsClick?: () => void;
    onSystemClick?: () => void;
    onAboutClick?: () => void;
  };
  /**
   * Permissions for settings menu
   */
  permissions?: {
    canViewUsers?: boolean;
    canViewApplications?: boolean;
  };
}

export const Header = ({
  className,
  showLedgerSelector = true,
  version,
  user,
  settings,
  permissions,
}: HeaderProps) => {
  const { locale } = useI18n();

  // Auto-detect version from environment or use provided
  const displayVersion =
    version || process.env.NEXT_PUBLIC_MIDAZ_VERSION || "1.0.0";

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
            Midaz Console{" "}
            <span className="text-xs font-normal text-zinc-400">
              v.{displayVersion}
            </span>
          </p>

          <Separator orientation="vertical" className="h-10" />

          <p className="text-xs font-normal text-zinc-400">
            {locale.toUpperCase()}
          </p>

          <SettingsDropdown
            onOrganizationsClick={settings?.onOrganizationsClick}
            onUsersClick={settings?.onUsersClick}
            onApplicationsClick={settings?.onApplicationsClick}
            onSystemClick={settings?.onSystemClick}
            onAboutClick={settings?.onAboutClick}
            permissions={permissions}
          />
          <UserDropdown
            userName={user?.name}
            docsUrl={user?.docsUrl}
            onLogout={user?.onLogout}
            onDocsClick={user?.onDocsClick}
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

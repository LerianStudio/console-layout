"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  LedgerSelector,
  LedgerSelectorProps,
} from "@/components/ledger-selector";
import { UserDropdown, UserDropdownProps } from "@/components/user-dropdown";
import {
  SettingsDropdown,
  SettingsDropdownProps,
} from "@/components/settings-dropdown";

export interface HeaderProps {
  /**
   * Midaz version to display
   */
  version?: string;
  /**
   * Current locale to display
   */
  locale?: string;
  /**
   * Props for LedgerSelector component
   */
  ledgerSelectorProps?: LedgerSelectorProps;
  /**
   * Props for UserDropdown component
   */
  userDropdownProps?: UserDropdownProps;
  /**
   * Props for SettingsDropdown component
   */
  settingsDropdownProps?: SettingsDropdownProps;
  /**
   * Text overrides for internationalization
   */
  text?: {
    midazConsole?: string;
  };
  /**
   * Custom className for header container
   */
  className?: string;
  /**
   * Whether to show the ledger selector
   */
  showLedgerSelector?: boolean;
}

export const Header = ({
  version,
  locale = "EN",
  ledgerSelectorProps,
  userDropdownProps,
  settingsDropdownProps,
  text = {
    midazConsole: "Midaz Console",
  },
  className,
  showLedgerSelector = true,
}: HeaderProps) => {
  return (
    <div
      className={`flex h-[60px] w-full items-center border-b bg-white py-5 pr-16 ${
        className || ""
      }`}
    >
      <nav className="flex w-full items-center justify-between gap-4 pl-16">
        {showLedgerSelector && <LedgerSelector {...ledgerSelectorProps} />}

        <div className="flex items-center gap-6">
          <p className="text-xs font-medium text-zinc-400">
            {text.midazConsole}{" "}
            {version && (
              <span className="text-xs font-normal text-zinc-400">
                v.{version}
              </span>
            )}
          </p>

          <Separator orientation="vertical" className="h-10" />

          <p className="text-xs font-normal text-zinc-400">
            {locale.toUpperCase()}
          </p>

          <SettingsDropdown {...settingsDropdownProps} />
          <UserDropdown {...userDropdownProps} />
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

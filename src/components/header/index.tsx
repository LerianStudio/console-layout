"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import { LedgerSelector } from "@/components/ledger-selector";
import { UserDropdown } from "@/components/user-dropdown";
import { SettingsDropdown } from "@/components/settings-dropdown";
import { useHeaderContext } from "@/providers/header-provider";

export interface HeaderProps {
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
  className,
  showLedgerSelector = true,
}: HeaderProps) => {
  const { version, locale, text } = useHeaderContext();

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

          <SettingsDropdown />
          <UserDropdown />
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

"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { SidebarItemButton } from "./sidebar-item-button";
import { SidebarItemIconButton } from "./sidebar-item-icon-button";
import { useSidebar } from "../../../providers/sidebar-provider";
import { useI18n } from "../../../lib/i18n";

export interface SidebarItemProps {
  title: string;
  icon: React.ReactNode;
  href: string;
  disabled?: boolean;
  disabledReason?: string;
}

export const SidebarItem = ({
  disabled,
  href,
  disabledReason,
  ...others
}: SidebarItemProps) => {
  const pathname = usePathname();
  const { isCollapsed } = useSidebar();
  const { formatMessage } = useI18n();

  const defaultDisabledReason =
    disabledReason ||
    formatMessage("sidebar.disabled.reason") ||
    "No ledger selected. To access, create a ledger.";

  const isActive = (href: string) => pathname === href;

  if (isCollapsed) {
    return (
      <SidebarItemIconButton
        href={href}
        active={isActive(href)}
        disabled={disabled}
        disabledReason={defaultDisabledReason}
        {...others}
      />
    );
  }

  return (
    <SidebarItemButton
      href={href}
      active={isActive(href)}
      disabled={disabled}
      disabledReason={defaultDisabledReason}
      {...others}
    />
  );
};

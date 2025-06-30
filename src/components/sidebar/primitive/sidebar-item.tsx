"use client";

import React from "react";
import { SidebarItemButton } from "./sidebar-item-button";
import { SidebarItemIconButton } from "./sidebar-item-icon-button";
import { useSidebar } from "../../../providers/sidebar-provider";

export interface SidebarItemProps {
  title: string;
  icon: React.ReactNode;
  href: string;
  disabled?: boolean;
  disabledReason?: string;
  active?: boolean;
  onClick?: () => void;
}

export const SidebarItem = ({
  disabled,
  href,
  disabledReason,
  active,
  ...others
}: SidebarItemProps) => {
  const { isCollapsed } = useSidebar();

  const defaultDisabledReason =
    disabledReason || "No ledger selected. To access, create a ledger.";

  if (isCollapsed) {
    return (
      <SidebarItemIconButton
        href={href}
        active={active}
        disabled={disabled}
        disabledReason={defaultDisabledReason}
        {...others}
      />
    );
  }

  return (
    <SidebarItemButton
      href={href}
      active={active}
      disabled={disabled}
      disabledReason={defaultDisabledReason}
      {...others}
    />
  );
};

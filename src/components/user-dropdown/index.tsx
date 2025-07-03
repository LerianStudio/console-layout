"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuItemIcon,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Book, CircleUser, LogOut } from "lucide-react";
import { useI18n } from "../../lib/i18n";

export interface UserDropdownProps {
  /** User name to display */
  userName?: string;
  /** Documentation URL */
  docsUrl?: string;
  /** Logout handler */
  onLogout?: () => void;
  /** Support/docs click handler */
  onDocsClick?: () => void;
}

export const UserDropdown = ({
  userName = "User",
  docsUrl = "https://docs.lerian.studio/",
  onLogout,
  onDocsClick,
}: UserDropdownProps) => {
  const { formatMessage } = useI18n();

  const handleDocsClick = () => {
    if (onDocsClick) {
      onDocsClick();
    } else {
      window.open(docsUrl, "_blank", "noopener noreferrer");
    }
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      // Default logout behavior - could be customized
      console.warn("No logout handler provided to UserDropdown");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <CircleUser className="text-shadcn-400 h-8 w-8" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[241px]">
        <DropdownMenuLabel>{userName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDocsClick}>
          <DropdownMenuItemIcon>
            <Book />
          </DropdownMenuItemIcon>
          {formatMessage("header.userDropdown.support")}
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={handleLogout}>
          <DropdownMenuItemIcon>
            <LogOut />
          </DropdownMenuItemIcon>
          {formatMessage("header.userDropdown.logout")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

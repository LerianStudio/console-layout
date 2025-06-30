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
} from "@/components/ui/dropdown-menu";
import { Book, CircleUser, LogOut } from "lucide-react";

export interface UserDropdownProps {
  /**
   * User name to display in dropdown header
   */
  userName?: string;
  /**
   * Whether auth plugin is enabled
   */
  isAuthEnabled?: boolean;
  /**
   * Documentation hub URL
   */
  docsUrl?: string;
  /**
   * Callback when logout is clicked
   */
  onLogout?: () => void;
  /**
   * Callback when documentation is clicked
   */
  onDocsClick?: () => void;
  /**
   * Text overrides for internationalization
   */
  text?: {
    user?: string;
    documentation?: string;
    logout?: string;
  };
}

export const UserDropdown = ({
  userName,
  isAuthEnabled = true,
  docsUrl = "https://docs.lerian.studio/",
  onLogout,
  onDocsClick,
  text = {
    user: "User",
    documentation: "Documentation Hub",
    logout: "Logout",
  },
}: UserDropdownProps) => {
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
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <CircleUser className="text-shadcn-400 h-8 w-8" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[241px]">
        <DropdownMenuLabel>{userName || text.user}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDocsClick}>
          <DropdownMenuItemIcon>
            <Book />
          </DropdownMenuItemIcon>
          {text.documentation}
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        {isAuthEnabled && (
          <DropdownMenuItem onClick={handleLogout}>
            <DropdownMenuItemIcon>
              <LogOut />
            </DropdownMenuItemIcon>
            {text.logout}
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

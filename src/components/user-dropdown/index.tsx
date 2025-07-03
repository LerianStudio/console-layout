"use client";

import React, { useContext } from "react";
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
import { HeaderContext } from "../../providers/header-provider";
import { HeaderContextType } from "../../types/header";

export interface UserDropdownProps {
  /**
   * User name to display
   * @deprecated Use HeaderProvider context instead
   */
  userName?: string;
  /**
   * Documentation URL
   * @deprecated Use HeaderProvider context instead
   */
  docsUrl?: string;
  /**
   * Logout handler
   * @deprecated Use HeaderProvider context instead
   */
  onLogout?: () => void;
  /**
   * Support/docs click handler
   * @deprecated Use HeaderProvider context instead
   */
  onDocsClick?: () => void;
}

export const UserDropdown = ({
  userName: propUserName,
  docsUrl: propDocsUrl,
  onLogout: propOnLogout,
  onDocsClick: propOnDocsClick,
}: UserDropdownProps) => {
  const { formatMessage } = useI18n();
  const headerContext = useContext(HeaderContext) as HeaderContextType | null;

  // Use context as primary, props as deprecated fallback
  const userName = headerContext?.userName || propUserName || "User";
  const isAuthEnabled = headerContext?.isAuthEnabled !== false; // Default to true if no context

  const handleDocsClick = () => {
    const contextHandler = headerContext?.handlers?.onDocsClick;
    const fallbackHandler = propOnDocsClick;
    const fallbackUrl = propDocsUrl || "https://docs.lerian.studio/";

    if (contextHandler) {
      contextHandler();
    } else if (fallbackHandler) {
      fallbackHandler();
    } else {
      window.open(fallbackUrl, "_blank", "noopener noreferrer");
    }
  };

  const handleLogout = () => {
    const contextHandler = headerContext?.handlers?.onLogout;
    const fallbackHandler = propOnLogout;

    if (contextHandler) {
      contextHandler();
    } else if (fallbackHandler) {
      fallbackHandler();
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

        {isAuthEnabled && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <DropdownMenuItemIcon>
                <LogOut />
              </DropdownMenuItemIcon>
              {formatMessage("header.userDropdown.logout")}
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

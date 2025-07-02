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
import { useHeaderContext } from "../../providers/header-provider";
import { useI18n } from "../../lib/i18n";

export const UserDropdown = () => {
  const { userName, handlers } = useHeaderContext();
  const { formatMessage } = useI18n();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <CircleUser className="text-shadcn-400 h-8 w-8" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[241px]">
        <DropdownMenuLabel>{userName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handlers.onDocsClick}>
          <DropdownMenuItemIcon>
            <Book />
          </DropdownMenuItemIcon>
          {formatMessage("header.userDropdown.support")}
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={handlers.onLogout}>
          <DropdownMenuItemIcon>
            <LogOut />
          </DropdownMenuItemIcon>
          {formatMessage("header.userDropdown.logout")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

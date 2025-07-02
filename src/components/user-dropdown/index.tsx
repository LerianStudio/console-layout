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
import { useHeaderContext } from "@/providers/header-provider";

export const UserDropdown = () => {
  const { userName, handlers, text } = useHeaderContext();

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
          {text.documentation}
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={handlers.onLogout}>
          <DropdownMenuItemIcon>
            <LogOut />
          </DropdownMenuItemIcon>
          {text.logout}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

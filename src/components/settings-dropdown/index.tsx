"use client";

import React from "react";
import {
  Building,
  Globe,
  HelpCircle,
  Layers,
  Settings,
  Users,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuItemIcon,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useHeaderContext } from "@/providers/header-provider";

export const SettingsDropdown = () => {
  const { handlers, text, permissions } = useHeaderContext();

  const defaultItems = [
    {
      key: "organizations",
      icon: Building,
      label: text.organizations,
      onClick: handlers.onOrganizationsClick,
      visible: true,
    },
    {
      key: "users",
      icon: Users,
      label: text.users,
      onClick: handlers.onUsersClick,
      visible: permissions.canViewUsers,
    },
    {
      key: "applications",
      icon: Layers,
      label: text.applications,
      onClick: handlers.onApplicationsClick,
      visible: permissions.canViewApplications,
    },
    {
      key: "system",
      icon: Globe,
      label: text.system,
      onClick: handlers.onSystemClick,
      visible: true,
    },
  ];

  const visibleItems = defaultItems.filter((item) => item.visible);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Settings className="text-shadcn-400" size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[241px]">
        <DropdownMenuLabel>{text.settings}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {visibleItems.map((item) => (
          <DropdownMenuItem key={item.key} onClick={item.onClick}>
            <DropdownMenuItemIcon>
              <item.icon />
            </DropdownMenuItemIcon>
            {item.label}
          </DropdownMenuItem>
        ))}

        {handlers.onAboutClick && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handlers.onAboutClick}>
              <DropdownMenuItemIcon>
                <HelpCircle />
              </DropdownMenuItemIcon>
              {text.about}
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

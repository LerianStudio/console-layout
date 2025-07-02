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
} from "../ui/dropdown-menu";
import { useHeaderContext } from "../../providers/header-provider";
import { useI18n } from "../../lib/i18n";

export const SettingsDropdown = () => {
  const { handlers, permissions } = useHeaderContext();
  const { formatMessage } = useI18n();

  const defaultItems = [
    {
      key: "organizations",
      icon: Building,
      label: formatMessage("settingsDropdown.organizations"),
      onClick: handlers.onOrganizationsClick,
      visible: true,
    },
    {
      key: "users",
      icon: Users,
      label: formatMessage("settingsDropdown.users"),
      onClick: handlers.onUsersClick,
      visible: permissions.canViewUsers,
    },
    {
      key: "applications",
      icon: Layers,
      label: formatMessage("settingsDropdown.applications"),
      onClick: handlers.onApplicationsClick,
      visible: permissions.canViewApplications,
    },
    {
      key: "system",
      icon: Globe,
      label: formatMessage("settingsDropdown.system"),
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
        <DropdownMenuLabel>
          {formatMessage("settingsDropdown.settings")}
        </DropdownMenuLabel>
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
              {formatMessage("settingsDropdown.about")}
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

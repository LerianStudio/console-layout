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

export interface SettingsDropdownItem {
  key: string;
  icon: React.ComponentType;
  label: string;
  onClick: () => void;
  visible?: boolean;
}

export interface SettingsDropdownProps {
  /**
   * Custom settings items
   */
  items?: SettingsDropdownItem[];
  /**
   * Callback for organizations click
   */
  onOrganizationsClick?: () => void;
  /**
   * Callback for users click
   */
  onUsersClick?: () => void;
  /**
   * Callback for applications click
   */
  onApplicationsClick?: () => void;
  /**
   * Callback for system click
   */
  onSystemClick?: () => void;
  /**
   * Callback for about click
   */
  onAboutClick?: () => void;
  /**
   * Text overrides for internationalization
   */
  text?: {
    settings?: string;
    organizations?: string;
    users?: string;
    applications?: string;
    system?: string;
    about?: string;
  };
  /**
   * Permissions for menu items
   */
  permissions?: {
    canViewUsers?: boolean;
    canViewApplications?: boolean;
  };
}

export const SettingsDropdown = ({
  items,
  onOrganizationsClick,
  onUsersClick,
  onApplicationsClick,
  onSystemClick,
  onAboutClick,
  text = {
    settings: "Settings",
    organizations: "Organizations",
    users: "Users",
    applications: "Applications",
    system: "System",
    about: "About Midaz",
  },
  permissions = {
    canViewUsers: true,
    canViewApplications: true,
  },
}: SettingsDropdownProps) => {
  const defaultItems: SettingsDropdownItem[] = [
    {
      key: "organizations",
      icon: Building,
      label: text.organizations!,
      onClick: onOrganizationsClick || (() => {}),
      visible: true,
    },
    {
      key: "users",
      icon: Users,
      label: text.users!,
      onClick: onUsersClick || (() => {}),
      visible: permissions.canViewUsers,
    },
    {
      key: "applications",
      icon: Layers,
      label: text.applications!,
      onClick: onApplicationsClick || (() => {}),
      visible: permissions.canViewApplications,
    },
    {
      key: "system",
      icon: Globe,
      label: text.system!,
      onClick: onSystemClick || (() => {}),
      visible: true,
    },
  ];

  const menuItems = items || defaultItems;
  const visibleItems = menuItems.filter((item) => item.visible !== false);

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

        {onAboutClick && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={onAboutClick}>
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

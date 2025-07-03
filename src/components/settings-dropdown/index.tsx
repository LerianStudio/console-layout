"use client";

import React, { useState } from "react";
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
import { useI18n } from "../../lib/i18n";
import { AboutMidazDialog } from "./about-midaz-dialog";
import { Enforce } from "../ui/enforce";

export interface SettingsDropdownProps {
  /** Handler for organizations click */
  onOrganizationsClick?: () => void;
  /** Handler for users click */
  onUsersClick?: () => void;
  /** Handler for applications click */
  onApplicationsClick?: () => void;
  /** Handler for system click */
  onSystemClick?: () => void;
  /** Handler for about click (if not provided, uses built-in dialog) */
  onAboutClick?: () => void;
  /** Permissions for showing menu items */
  permissions?: {
    canViewUsers?: boolean;
    canViewApplications?: boolean;
  };
  /** About dialog configuration */
  aboutDialog?: {
    version?: string;
    logoSrc?: string;
    termsLink?: string;
    licenseLink?: string;
    showLinks?: boolean;
  };
}

export const SettingsDropdown = ({
  onOrganizationsClick,
  onUsersClick,
  onApplicationsClick,
  onSystemClick,
  onAboutClick,
  permissions = {
    canViewUsers: true,
    canViewApplications: true,
  },
  aboutDialog,
}: SettingsDropdownProps) => {
  const { formatMessage } = useI18n();
  const [aboutOpen, setAboutOpen] = useState(false);

  const handleAboutClick = () => {
    if (onAboutClick) {
      onAboutClick();
    } else {
      setAboutOpen(true);
    }
  };

  return (
    <React.Fragment>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Settings className="text-shadcn-400" size={24} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-[241px]">
          <DropdownMenuLabel>
            {formatMessage("settingsDropdown.settings")}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={onOrganizationsClick}>
            <DropdownMenuItemIcon>
              <Building />
            </DropdownMenuItemIcon>
            {formatMessage("settingsDropdown.organizations")}
          </DropdownMenuItem>

          <Enforce
            hasPermission={permissions.canViewUsers}
            resource="users"
            action="get"
          >
            <DropdownMenuItem onClick={onUsersClick}>
              <DropdownMenuItemIcon>
                <Users />
              </DropdownMenuItemIcon>
              {formatMessage("settingsDropdown.users")}
            </DropdownMenuItem>
          </Enforce>

          <Enforce
            hasPermission={permissions.canViewApplications}
            resource="applications"
            action="get"
          >
            <DropdownMenuItem onClick={onApplicationsClick}>
              <DropdownMenuItemIcon>
                <Layers />
              </DropdownMenuItemIcon>
              {formatMessage("settingsDropdown.applications")}
            </DropdownMenuItem>
          </Enforce>

          <DropdownMenuItem onClick={onSystemClick}>
            <DropdownMenuItemIcon>
              <Globe />
            </DropdownMenuItemIcon>
            {formatMessage("settingsDropdown.system")}
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleAboutClick}>
            <DropdownMenuItemIcon>
              <HelpCircle />
            </DropdownMenuItemIcon>
            {formatMessage("settingsDropdown.about")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AboutMidazDialog
        open={aboutOpen}
        setOpen={setAboutOpen}
        version={aboutDialog?.version}
        logoSrc={aboutDialog?.logoSrc}
        termsLink={aboutDialog?.termsLink}
        licenseLink={aboutDialog?.licenseLink}
        showLinks={aboutDialog?.showLinks}
      />
    </React.Fragment>
  );
};

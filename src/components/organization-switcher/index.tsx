"use client";

import React, { useEffect, useState } from "react";
import { useListOrganizations } from "../../client/organizations";
import { Popover } from "../ui/popover";
import { OrganizationDto } from "../../types";
import { useSidebar } from "../../providers/sidebar-provider";
import { Skeleton } from "../ui/skeleton";
import { useOrganization } from "../../providers/organization-provider";
import { OrganizationSwitcherContent } from "./organization-switcher-content";
import { SwitcherTrigger } from "./organization-switcher-trigger";
import lerianLogo from "../../public/svg/lerian-logo.svg";

export interface OrganizationSwitcherProps {
  /** Alt text for organization logo */
  logoAlt?: string;
  /** Edit organization link href */
  editHref?: string;
  /** Settings link href */
  settingsHref?: string;
  /** Text for edit link */
  editText?: string;
  /** Text for organization settings */
  organizationText?: string;
}

export const OrganizationSwitcher = ({
  logoAlt = "Your organization logo",
  editHref = "/settings/organizations",
  settingsHref = "/settings?tab=organizations",
  editText = "Edit",
  organizationText = "Organization",
}: OrganizationSwitcherProps) => {
  const { isCollapsed } = useSidebar();
  const { data, isPending } = useListOrganizations({});
  const { currentOrganization, setOrganization } = useOrganization();
  const [open, setOpen] = useState(false);
  const [avatar, setAvatar] = useState<string>(lerianLogo);

  const handleChange = (organization: OrganizationDto) => {
    setOrganization(organization);
    setOpen(false);
  };

  useEffect(() => {
    if (currentOrganization?.avatar) {
      return setAvatar(currentOrganization.avatar);
    }
    setAvatar(lerianLogo);
  }, [currentOrganization]);

  if ((isPending && !data) || !currentOrganization) {
    return <Skeleton className="h-10 w-10" />;
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <SwitcherTrigger
        open={open}
        name={currentOrganization.legalName}
        image={avatar}
        alt={logoAlt}
        disabled={!data || data.items.length <= 1}
        collapsed={isCollapsed}
      />

      <OrganizationSwitcherContent
        currentOrganization={currentOrganization}
        status="active"
        alt={logoAlt}
        image={avatar}
        data={data?.items || []}
        onChange={handleChange}
        onClose={() => setOpen(false)}
        editHref={editHref}
        settingsHref={settingsHref}
        editText={editText}
        organizationText={organizationText}
      />
    </Popover>
  );
};

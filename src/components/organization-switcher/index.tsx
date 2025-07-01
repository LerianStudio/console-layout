"use client";

import React, { useEffect } from "react";
import { ChevronDown, Building } from "lucide-react";
import { useListOrganizations } from "../../client/organizations";
import { useOrganization } from "../../providers/organization-provider";
import { useSidebar } from "../../providers/sidebar-provider";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { OrganizationDto } from "../../types";
import LerianLogo from "@/public/svg/lerian-logo.svg";
import { SwitcherTrigger } from "./organization-switcher-trigger";
import { OrganizationSwitcherContent } from "./organization-switcher-content";
import { useIntl } from "react-intl";

export interface OrganizationSwitcherProps {
  /** Alt text for organization logo */
  logoAlt?: string;
  /** Default logo to use when no organization avatar */
  defaultLogo?: React.ReactNode;
  /** Custom organization item renderer */
  renderOrganizationItem?: (
    organization: OrganizationDto,
    isSelected: boolean,
    onSelect: () => void
  ) => React.ReactNode;
}

export const OrganizationSwitcher = () => {
  const intl = useIntl();
  const { isCollapsed } = useSidebar();
  const { data, isPending } = useListOrganizations({});
  const { currentOrganization, setOrganization } = useOrganization();
  const [open, setOpen] = React.useState(false);
  const [avatar, setAvatar] = React.useState<string>(LerianLogo);

  const handleChange = (organization: OrganizationDto) => {
    setOrganization(organization);
    setOpen(false);
  };

  useEffect(() => {
    if (currentOrganization.avatar) {
      return setAvatar(currentOrganization.avatar);
    }

    setAvatar(LerianLogo);
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
        alt={intl.formatMessage({
          id: "common.logoAlt",
          defaultMessage: "Your organization logo",
        })}
        disabled={!data || data.items.length <= 1}
        collapsed={isCollapsed}
      />

      <OrganizationSwitcherContent
        currentOrganization={currentOrganization}
        status="active"
        alt={intl.formatMessage({
          id: "common.logoAlt",
          defaultMessage: "Your organization logo",
        })}
        image={avatar}
        data={data?.items || []}
        onChange={handleChange}
        onClose={() => setOpen(false)}
      />
    </Popover>
  );
};

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

export const OrganizationSwitcher = ({
  logoAlt = "Organization logo",
  defaultLogo = <Building className="h-8 w-8" />,
  renderOrganizationItem,
}: OrganizationSwitcherProps) => {
  const { isCollapsed } = useSidebar();
  const { data, isPending } = useListOrganizations({});
  const { currentOrganization, setOrganization } = useOrganization();
  const [open, setOpen] = React.useState(false);

  const handleChange = (organization: OrganizationDto) => {
    setOrganization(organization);
    setOpen(false);
  };

  if ((isPending && !data) || !currentOrganization) {
    return <Skeleton className="h-10 w-10" />;
  }

  const avatar = currentOrganization.avatar ? (
    <img
      src={currentOrganization.avatar}
      alt={logoAlt}
      className="h-8 w-8 rounded object-cover"
    />
  ) : (
    defaultLogo
  );

  // Collapsed view - just the avatar
  if (isCollapsed) {
    if (!data || data.items.length <= 1) {
      return <div className="flex items-center justify-center">{avatar}</div>;
    }

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" className="h-10 w-10">
            {avatar}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-64" side="right">
          <div className="space-y-2">
            <p className="font-medium text-sm">Organizations</p>
            {data?.items.map((org) => {
              const isSelected = org.id === currentOrganization.id;

              if (renderOrganizationItem) {
                return renderOrganizationItem(org, isSelected, () =>
                  handleChange(org)
                );
              }

              return (
                <Button
                  key={org.id}
                  variant={isSelected ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => handleChange(org)}
                >
                  <div className="flex items-center gap-2">
                    {org.avatar ? (
                      <img
                        src={org.avatar}
                        alt={logoAlt}
                        className="h-6 w-6 rounded object-cover"
                      />
                    ) : (
                      <Building className="h-6 w-6" />
                    )}
                    <span className="truncate">{org.legalName}</span>
                  </div>
                </Button>
              );
            })}
          </div>
        </PopoverContent>
      </Popover>
    );
  }

  // Expanded view
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="w-full justify-start gap-2 px-2"
          disabled={!data || data.items.length <= 1}
        >
          {avatar}
          <div className="flex-1 text-left">
            <p className="text-sm font-medium truncate">
              {currentOrganization.legalName}
            </p>
          </div>
          {data && data.items.length > 1 && (
            <ChevronDown className="h-4 w-4 opacity-50" />
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-64">
        <div className="space-y-2">
          <p className="font-medium text-sm">Organizations</p>
          {data?.items.map((org) => {
            const isSelected = org.id === currentOrganization.id;

            if (renderOrganizationItem) {
              return renderOrganizationItem(org, isSelected, () =>
                handleChange(org)
              );
            }

            return (
              <Button
                key={org.id}
                variant={isSelected ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => handleChange(org)}
              >
                <div className="flex items-center gap-2">
                  {org.avatar ? (
                    <img
                      src={org.avatar}
                      alt={logoAlt}
                      className="h-6 w-6 rounded object-cover"
                    />
                  ) : (
                    <Building className="h-6 w-6" />
                  )}
                  <span className="truncate">{org.legalName}</span>
                </div>
              </Button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
};

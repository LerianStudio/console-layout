"use client";

import React from "react";
import {
  ArrowLeftRight,
  Briefcase,
  Coins,
  DollarSign,
  Group,
  Home,
  LibraryBig,
} from "lucide-react";

import * as LucideIcons from "lucide-react";
import {
  SidebarItem,
  SidebarContent,
  SidebarGroup,
  SidebarGroupTitle,
  SidebarHeader,
  SidebarExpandButton,
  SidebarRoot,
} from "./primitive";
import { Separator } from "../ui/separator";
import { useOrganization } from "../../providers/organization-provider";
import { useGetPluginMenus } from "../../client/plugin-menu";
import { useSidebar } from "../../providers/sidebar-provider";
import { PluginManifestDto } from "../../types";

export interface AutoSidebarProps {
  /** Header content - usually OrganizationSwitcher */
  headerContent?: React.ReactNode;
}

export const AutoSidebar = ({ headerContent }: AutoSidebarProps) => {
  const { isCollapsed } = useSidebar();
  const [isMobileWidth, setIsMobileWidth] = React.useState(false);
  const { currentLedger } = useOrganization();
  const { data } = useGetPluginMenus();

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobileWidth(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SidebarRoot>
      {headerContent && <SidebarHeader>{headerContent}</SidebarHeader>}

      <SidebarContent>
        <SidebarGroup>
          <SidebarItem title="Home" icon={<Home />} href="/" />

          <SidebarItem title="Ledgers" icon={<LibraryBig />} href="/ledgers" />
        </SidebarGroup>

        {isCollapsed && <Separator />}

        <SidebarGroup>
          <SidebarGroupTitle collapsed={isCollapsed}>Ledger</SidebarGroupTitle>

          <SidebarItem
            title="Assets"
            icon={<DollarSign />}
            href="/assets"
            disabled={Object.keys(currentLedger).length === 0}
          />

          <SidebarItem
            title="Accounts"
            icon={<Coins />}
            href="/accounts"
            disabled={Object.keys(currentLedger).length === 0}
          />

          <SidebarItem
            title="Segments"
            icon={<Group />}
            href="/segments"
            disabled={Object.keys(currentLedger).length === 0}
          />

          <SidebarItem
            title="Portfolios"
            icon={<Briefcase />}
            href="/portfolios"
            disabled={Object.keys(currentLedger).length === 0}
          />

          <SidebarItem
            title="Transactions"
            icon={<ArrowLeftRight />}
            href="/transactions"
            disabled={Object.keys(currentLedger).length === 0}
          />
        </SidebarGroup>

        {data && data.length > 0 && (
          <SidebarGroup>
            <SidebarGroupTitle collapsed={isCollapsed}>
              Plugins
            </SidebarGroupTitle>
            {data.map((plugin: PluginManifestDto) => {
              if (!plugin.enabled) {
                return null;
              }

              const Icon =
                (LucideIcons as unknown as Record<string, React.ElementType>)[
                  plugin.icon
                ] || LucideIcons.Landmark;
              return (
                <SidebarItem
                  key={plugin.name}
                  title={plugin.title}
                  icon={<Icon />}
                  href={plugin.route}
                />
              );
            })}
          </SidebarGroup>
        )}
      </SidebarContent>

      {!isMobileWidth && <SidebarExpandButton />}
    </SidebarRoot>
  );
};

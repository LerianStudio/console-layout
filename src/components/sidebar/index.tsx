"use client";

import React from "react";
import { usePathname } from "next/navigation";
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
import { useGetPluginMenus } from "../../client/plugin-menu";
import { SidebarRoot } from "./primitive/sidebar-root";
import {
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupTitle,
} from "./primitive/sidebar-components";
import { SidebarItem } from "./primitive/sidebar-item";
import { SidebarExpandButton } from "./primitive/sidebar-expand-button";
import { Separator } from "../ui/separator";
import { useSidebar } from "../../providers/sidebar-provider";
import { useOrganization } from "../../providers/organization-provider";
import { useI18n } from "../../lib/i18n";
import { OrganizationSwitcher } from "../organization-switcher";

const Sidebar = () => {
  const { isCollapsed } = useSidebar();
  const { formatMessage } = useI18n();
  const pathname = usePathname();
  const { data: plugins = [] } = useGetPluginMenus();
  const { currentLedger } = useOrganization();
  const [isMobileWidth, setIsMobileWidth] = React.useState(false);

  // Mobile detection like console
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobileWidth(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine if ledger is disabled - using currentLedger like console
  const isLedgerDisabled = Object.keys(currentLedger).length === 0;

  return (
    <SidebarRoot>
      {/* Header with OrganizationSwitcher */}
      <SidebarHeader>
        <OrganizationSwitcher />
      </SidebarHeader>

      {/* Content */}
      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarItem
            title={formatMessage("sideBar.home")}
            icon={<Home />}
            href="/"
          />

          <SidebarItem
            title={formatMessage("sideBar.ledgers")}
            icon={<LibraryBig />}
            href="/ledgers"
          />
        </SidebarGroup>

        {/* Separator when collapsed like console */}
        {isCollapsed && <Separator />}

        {/* Ledger Navigation */}
        <SidebarGroup>
          <SidebarGroupTitle collapsed={isCollapsed}>
            {formatMessage("sideBar.ledger.title")}
          </SidebarGroupTitle>

          <SidebarItem
            title={formatMessage("common.assets")}
            icon={<DollarSign />}
            href="/assets"
            disabled={isLedgerDisabled}
          />

          <SidebarItem
            title={formatMessage("sideBar.ledger.accounts")}
            icon={<Coins />}
            href="/accounts"
            disabled={isLedgerDisabled}
          />

          <SidebarItem
            title={formatMessage("common.segments")}
            icon={<Group />}
            href="/segments"
            disabled={isLedgerDisabled}
          />

          <SidebarItem
            title={formatMessage("sideBar.accountHolders.portfolios")}
            icon={<Briefcase />}
            href="/portfolios"
            disabled={isLedgerDisabled}
          />

          <SidebarItem
            title={formatMessage("common.transactions")}
            icon={<ArrowLeftRight />}
            href="/transactions"
            disabled={isLedgerDisabled}
          />
        </SidebarGroup>

        {/* Plugins */}
        {plugins.length > 0 && (
          <SidebarGroup>
            <SidebarGroupTitle collapsed={isCollapsed}>
              {formatMessage("common.plugins")}
            </SidebarGroupTitle>
            {plugins
              .filter((plugin) => plugin.enabled)
              .map((plugin) => {
                const Icon =
                  (LucideIcons as unknown as Record<string, React.ElementType>)[
                    plugin.icon
                  ] || LucideIcons.Landmark;
                return (
                  <SidebarItem
                    key={plugin.id}
                    title={plugin.name}
                    icon={<Icon />}
                    href={plugin.route}
                  />
                );
              })}
          </SidebarGroup>
        )}
      </SidebarContent>

      {/* Expand button - hidden on mobile like console */}
      {!isMobileWidth && <SidebarExpandButton />}
    </SidebarRoot>
  );
};

export { Sidebar };
export default Sidebar;

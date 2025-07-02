"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useGetPluginMenus } from "../../client/plugin-menu";
// Ledgers client temporarily disabled
import { SidebarRoot } from "./primitive/sidebar-root";
import {
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupTitle,
} from "./primitive/sidebar-components";
import { SidebarItem } from "./primitive/sidebar-item";
import { SidebarExpandButton } from "./primitive/sidebar-expand-button";
import { useSidebar } from "../../providers/sidebar-provider";
import { useI18n } from "../../lib/i18n";

const Sidebar = () => {
  const { isCollapsed } = useSidebar();
  const { formatMessage } = useI18n();
  const pathname = usePathname();
  const { data: plugins = [] } = useGetPluginMenus();

  // Determine if ledger is disabled - simplified logic for now
  const isLedgerDisabled = !pathname.includes("/ledgers/");

  // Main navigation items
  const mainItems = [
    { label: formatMessage("sideBar.home"), href: "/" },
    { label: formatMessage("sideBar.ledgers"), href: "/ledgers" },
  ];

  // Ledger navigation items
  const ledgerItems = [
    { label: formatMessage("common.assets"), href: "/assets" },
    { label: formatMessage("sideBar.ledger.accounts"), href: "/accounts" },
    { label: formatMessage("common.segments"), href: "/segments" },
    {
      label: formatMessage("sideBar.accountHolders.portfolios"),
      href: "/portfolios",
    },
    { label: formatMessage("common.transactions"), href: "/transactions" },
  ];

  return (
    <SidebarRoot>
      {/* Header */}
      <SidebarHeader collapsed={isCollapsed}>
        <div className="flex items-center justify-between w-full">
          {!isCollapsed && (
            <div className="flex items-center">
              <span className="text-lg font-semibold">Midaz</span>
            </div>
          )}
          <SidebarExpandButton />
        </div>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupTitle collapsed={isCollapsed}>Main</SidebarGroupTitle>
          {mainItems.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              isActive={pathname === item.href}
            >
              <span>{item.label}</span>
            </SidebarItem>
          ))}
        </SidebarGroup>

        {/* Ledger Navigation */}
        <SidebarGroup>
          <SidebarGroupTitle collapsed={isCollapsed}>
            {formatMessage("sideBar.ledger.title")}
          </SidebarGroupTitle>
          {ledgerItems.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              disabled={isLedgerDisabled}
              isActive={pathname.startsWith(item.href)}
            >
              <span>{item.label}</span>
            </SidebarItem>
          ))}
        </SidebarGroup>

        {/* Plugins */}
        {plugins.length > 0 && (
          <SidebarGroup>
            <SidebarGroupTitle collapsed={isCollapsed}>
              {formatMessage("common.plugins")}
            </SidebarGroupTitle>
            {plugins
              .filter((plugin) => plugin.enabled)
              .map((plugin) => (
                <SidebarItem
                  key={plugin.id}
                  href={plugin.route}
                  isActive={pathname.startsWith(plugin.route)}
                >
                  <span>{plugin.name}</span>
                </SidebarItem>
              ))}
          </SidebarGroup>
        )}
      </SidebarContent>
    </SidebarRoot>
  );
};

export { Sidebar };
export default Sidebar;

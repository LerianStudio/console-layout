"use client";

import React from "react";
import { usePathname } from "next/navigation";
import * as LucideIcons from "lucide-react";
import { Separator } from "../ui/separator";
import { useOrganization } from "../../providers/organization-provider";
import { useSidebar } from "../../providers/sidebar-provider";
import { useGetPluginMenus } from "../../client/plugin-menu";
import { PluginManifestDto } from "../../types";
import {
  SidebarItem,
  SidebarContent,
  SidebarGroup,
  SidebarGroupTitle,
  SidebarHeader,
  SidebarExpandButton,
  SidebarRoot,
} from "./primitive";

export interface SidebarMenuItemConfig {
  id: string;
  title: string;
  icon: React.ReactNode;
  href: string;
  disabled?: boolean;
  disabledReason?: string;
}

export interface SidebarProps {
  /** Header content - usually OrganizationSwitcher */
  headerContent?: React.ReactNode;
  /** Main navigation items */
  mainItems?: SidebarMenuItemConfig[];
  /** Ledger-specific items that require a selected ledger */
  ledgerItems?: SidebarMenuItemConfig[];
  /** Whether to show plugins section */
  showPlugins?: boolean;
  /** Custom plugin renderer */
  renderPlugin?: (plugin: PluginManifestDto) => React.ReactNode | null;
  /** Text for sections */
  text?: {
    ledgerSectionTitle?: string;
    pluginsSectionTitle?: string;
    noLedgerDisabledReason?: string;
  };
  /** Whether to show mobile expand button */
  showExpandButton?: boolean;
  /** Check if item is active based on pathname */
  isActiveItem?: (href: string, pathname: string) => boolean;
}

export const Sidebar = ({
  headerContent,
  mainItems = [],
  ledgerItems = [],
  showPlugins = true,
  renderPlugin,
  text = {},
  showExpandButton = true,
  isActiveItem,
}: SidebarProps) => {
  const pathname = usePathname();
  const { isCollapsed } = useSidebar();
  const [isMobileWidth, setIsMobileWidth] = React.useState(false);
  const { currentLedger } = useOrganization();
  const { data: pluginData } = useGetPluginMenus();

  const {
    ledgerSectionTitle = "Ledger",
    pluginsSectionTitle = "Plugins",
    noLedgerDisabledReason = "No ledger selected. To access, create a ledger.",
  } = text;

  // Check if item is active
  const defaultIsActive = (href: string, pathname: string) => pathname === href;
  const checkIsActive = isActiveItem || defaultIsActive;

  // Check if ledger is available
  const hasLedger = currentLedger && Object.keys(currentLedger).length > 0;

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
        {/* Main navigation items */}
        {mainItems.length > 0 && (
          <SidebarGroup>
            {mainItems.map((item) => (
              <SidebarItem
                key={item.id}
                title={item.title}
                icon={item.icon}
                href={item.href}
                active={checkIsActive(item.href, pathname)}
                disabled={item.disabled}
                disabledReason={item.disabledReason}
              />
            ))}
          </SidebarGroup>
        )}

        {/* Separator if we have both main items and ledger items */}
        {mainItems.length > 0 && ledgerItems.length > 0 && isCollapsed && (
          <Separator />
        )}

        {/* Ledger-specific items */}
        {ledgerItems.length > 0 && (
          <SidebarGroup>
            <SidebarGroupTitle collapsed={isCollapsed}>
              {ledgerSectionTitle}
            </SidebarGroupTitle>

            {ledgerItems.map((item) => (
              <SidebarItem
                key={item.id}
                title={item.title}
                icon={item.icon}
                href={item.href}
                active={checkIsActive(item.href, pathname)}
                disabled={item.disabled || !hasLedger}
                disabledReason={item.disabledReason || noLedgerDisabledReason}
              />
            ))}
          </SidebarGroup>
        )}

        {/* Plugins section */}
        {showPlugins && pluginData && pluginData.length > 0 && (
          <SidebarGroup>
            <SidebarGroupTitle collapsed={isCollapsed}>
              {pluginsSectionTitle}
            </SidebarGroupTitle>
            {pluginData.map((plugin: PluginManifestDto) => {
              if (!plugin.enabled) {
                return null;
              }

              // Use custom renderer if provided
              if (renderPlugin) {
                return renderPlugin(plugin);
              }

              // Default plugin rendering
              const Icon =
                (LucideIcons as any)[plugin.icon] || LucideIcons.Landmark;
              return (
                <SidebarItem
                  key={plugin.name}
                  title={plugin.title}
                  icon={<Icon />}
                  href={plugin.route}
                  active={checkIsActive(plugin.route, pathname)}
                />
              );
            })}
          </SidebarGroup>
        )}
      </SidebarContent>

      {/* Expand/Collapse button */}
      {showExpandButton && !isMobileWidth && <SidebarExpandButton />}
    </SidebarRoot>
  );
};

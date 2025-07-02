"use client";

import React from "react";
import { PanelLeft } from "lucide-react";
import { Button } from "../../ui/button";
import { useSidebar } from "../../../providers/sidebar-provider";
import { useI18n } from "../../../lib/i18n";

export const SidebarExpandButton = () => {
  const { isCollapsed, toggleSidebar } = useSidebar();
  const { formatMessage } = useI18n();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleSidebar}
      className="h-9 w-9 rounded-lg hover:bg-shadcn-100"
      aria-label={
        isCollapsed ? formatMessage("common.expand") : "Collapse sidebar"
      }
    >
      <PanelLeft className="h-4 w-4" />
    </Button>
  );
};

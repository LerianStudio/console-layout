"use client";

import React from "react";
import { PanelLeftClose, PanelRightClose } from "lucide-react";
import { Button } from "../../ui/button";
import { useSidebar } from "../../../providers/sidebar-provider";
import { useI18n } from "../../../lib/i18n";
import { SidebarFooter } from "./sidebar-components";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";

export const SidebarExpandButton = () => {
  const { isCollapsed, toggleSidebar } = useSidebar();
  const { formatMessage } = useI18n();

  return (
    <React.Fragment>
      {!isCollapsed && (
        <div className="border-shadcn-200 flex w-full bg-white">
          <div className="absolute right-[-20px] bottom-4">
            <Button
              variant="white"
              className="border-shadcn-200 rounded-full border p-2"
              onClick={toggleSidebar}
            >
              <PanelLeftClose className="text-shadcn-400" />
            </Button>
          </div>
        </div>
      )}

      {isCollapsed && (
        <SidebarFooter>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                className="group/expand-button text-shadcn-400 hover:bg-accent rounded-sm bg-transparent p-2"
                onClick={toggleSidebar}
              >
                <PanelRightClose className="group-hover/expand-button:text-white dark:text-white" />
              </TooltipTrigger>
              <TooltipContent side="right">
                {formatMessage("common.expand")}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </SidebarFooter>
      )}
    </React.Fragment>
  );
};

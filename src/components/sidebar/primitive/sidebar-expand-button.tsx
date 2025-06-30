"use client";

import { PanelLeftClose, PanelRightClose } from "lucide-react";
import React from "react";
import { Button } from "../../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";
import { useSidebar } from "../../../providers/sidebar-provider";
import { SidebarFooter } from "./sidebar-components";

export interface SidebarExpandButtonProps {
  expandText?: string;
  collapseText?: string;
}

export const SidebarExpandButton = ({
  expandText = "Expand",
  collapseText = "Collapse",
}: SidebarExpandButtonProps) => {
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <React.Fragment>
      {!isCollapsed && (
        <div className="flex w-full bg-background border-t">
          <div className="absolute right-[-20px] bottom-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border p-2"
              onClick={toggleSidebar}
              title={collapseText}
            >
              <PanelLeftClose className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {isCollapsed && (
        <SidebarFooter>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                className="group/expand-button rounded-sm bg-transparent p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                onClick={toggleSidebar}
              >
                <PanelRightClose className="h-4 w-4" />
              </TooltipTrigger>
              <TooltipContent side="right">{expandText}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </SidebarFooter>
      )}
    </React.Fragment>
  );
};

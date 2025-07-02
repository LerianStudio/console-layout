"use client";

import React from "react";
import { useSidebar } from "../../../providers/sidebar-provider";

export const SidebarRoot = ({ children }: React.PropsWithChildren) => {
  const { isCollapsed } = useSidebar();

  return (
    <div
      data-collapsed={isCollapsed}
      className="group/sidebar shadow-sidebar dark:bg-cod-gray-950 relative flex flex-col"
      style={{
        width: isCollapsed ? "72px" : "auto",
        transition: "width 0.1s ease-out",
      }}
    >
      {children}
    </div>
  );
};

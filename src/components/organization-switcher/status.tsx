"use client";

import React from "react";
import { cn } from "../../lib/utils";

export type StatusIndicatorProps = {
  status: "active" | "inactive" | string;
};

const StatusIndicator = ({ status }: StatusIndicatorProps) => (
  <div
    className={cn(
      "h-[10px] w-[10px] rounded-full",
      status === "active" && "bg-green-400",
      status === "inactive" && "bg-red-600"
    )}
  />
);

export const StatusDisplay = ({ status }: StatusIndicatorProps) => {
  return (
    <div className="flex items-center gap-2">
      <StatusIndicator status={status} />
      <span className="text-muted-foreground text-xs font-medium">
        {status === "active" && "Active"}
        {status === "inactive" && "Inactive"}
      </span>
    </div>
  );
};

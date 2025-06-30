"use client";

import React from "react";
import Link from "next/link";
import { buttonVariants } from "../../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";
import { cn } from "../../../lib/utils";

export interface SidebarItemIconButtonProps {
  title: string;
  icon: React.ReactNode;
  href: string;
  active?: boolean;
  disabled?: boolean;
  disabledReason?: string;
  onClick?: () => void;
}

export const SidebarItemIconButton = ({
  title,
  icon,
  href,
  active,
  disabled = false,
  disabledReason,
  onClick,
}: SidebarItemIconButtonProps) => {
  const clonedIcon = React.isValidElement(icon)
    ? React.cloneElement(icon as React.ReactElement<any>, {
        className: cn(
          "h-6 w-6 text-muted-foreground",
          "group-hover/link:text-accent-foreground",
          active && "text-foreground group-hover/link:text-foreground"
        ),
      })
    : icon;

  const commonClasses = cn(
    buttonVariants({
      variant: active ? "activeLink" : "hoverLink",
      size: "icon",
    }),
    "group/link",
    disabled && "cursor-not-allowed opacity-30"
  );

  const content = clonedIcon;

  if (disabled) {
    return (
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <div className={commonClasses} onClick={(e) => e.preventDefault()}>
              {content}
            </div>
          </TooltipTrigger>
          <TooltipContent side="right">
            <div>
              <p className="font-medium">{title}</p>
              {disabledReason && (
                <p className="text-xs text-muted-foreground">
                  {disabledReason}
                </p>
              )}
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Link href={href} className={commonClasses} onClick={onClick}>
            {content}
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">{title}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

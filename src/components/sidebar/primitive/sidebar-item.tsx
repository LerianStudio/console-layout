"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../../ui/button";
import { cn } from "../../../lib/utils";

export interface SidebarItemProps {
  href: string;
  disabled?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const SidebarItem = ({
  href,
  disabled,
  isActive,
  onClick,
  children,
  className,
}: SidebarItemProps) => {
  const buttonClasses = cn(
    "h-10 justify-start rounded-lg gap-x-2 w-full px-3",
    "font-normal",
    className
  );

  if (disabled) {
    return (
      <Button
        variant="ghost"
        disabled
        className={cn(buttonClasses, "opacity-50 cursor-not-allowed")}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      asChild
      variant={isActive ? "activeLink" : "hoverLink"}
      onClick={onClick}
      className={buttonClasses}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

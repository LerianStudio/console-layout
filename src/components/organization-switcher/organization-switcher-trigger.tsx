"use client";

import React from "react";
import ClientImage from "./client-image";
import { cn } from "../../lib/utils";
import { PopoverTrigger } from "../ui/popover";
import { ChevronDown } from "lucide-react";

type LogoProps = {
  image: string;
  alt: string;
  name: string;
  active?: boolean;
  collapsed?: boolean;
  button?: boolean;
  singleOrg?: boolean;
};

const Logo = ({
  image,
  alt,
  name,
  active,
  collapsed,
  button,
  singleOrg,
}: LogoProps) => {
  return (
    <div
      className={cn(
        "group flex items-center gap-3",
        button && "cursor-pointer"
      )}
    >
      <ClientImage
        src={image}
        alt={alt}
        height={40}
        width={40}
        className={cn(
          "rounded-lg",
          button &&
            "group-hover:border-muted-foreground box-border border-[3px] p-px",
          active && "border-primary group-hover:border-primary"
        )}
      />

      {!collapsed && (
        <h1
          className={cn(
            "text-muted-foreground text-sm font-medium capitalize",
            active && "text-primary"
          )}
        >
          {name}
        </h1>
      )}

      {!collapsed && !singleOrg && (
        <ChevronDown
          className={cn(active && "text-primary rotate-180")}
          size={16}
        />
      )}
    </div>
  );
};

export type SwitcherTriggerProps = Omit<LogoProps, "active"> & {
  open: boolean;
  disabled?: boolean;
  singleOrg?: boolean;
};

export const SwitcherTrigger = ({
  open,
  disabled,
  singleOrg,
  ...others
}: SwitcherTriggerProps) => {
  if (disabled) {
    return (
      <PopoverTrigger>
        <Logo singleOrg active={open} {...others} />
      </PopoverTrigger>
    );
  }

  return (
    <PopoverTrigger>
      <Logo button active={open} {...others} />
    </PopoverTrigger>
  );
};

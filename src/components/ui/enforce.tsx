"use client";

import React from "react";

export interface EnforceProps {
  /** Children to conditionally render */
  children: React.ReactNode;
  /** Simple permission check - if false, children won't render */
  hasPermission?: boolean;
  /** Resource name for semantic purposes */
  resource?: string;
  /** Action name for semantic purposes */
  action?: string;
}

/**
 * Simple permission enforcement component
 * Conditionally renders children based on permission check
 */
export const Enforce = ({
  children,
  hasPermission = true,
  resource,
  action,
}: EnforceProps) => {
  // If no permission, don't render
  if (!hasPermission) {
    return null;
  }

  return <>{children}</>;
};

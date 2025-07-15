'use client'

import React from 'react'

export interface EnforceProps {
  /** Children to conditionally render */
  children: React.ReactNode
  /** Simple permission check - if false, children won't render */
  hasPermission?: boolean
  /** Resource name for semantic purposes */
  resource?: string
  /** Action name for semantic purposes */
  action?: string
}

/**
 * Permission enforcement component
 * Conditionally renders children based on auth enablement and permission check
 *
 * Logic:
 * - If NEXT_PUBLIC_MIDAZ_AUTH_ENABLED !== 'true': always returns null (hide component)
 * - If NEXT_PUBLIC_MIDAZ_AUTH_ENABLED === 'true': checks hasPermission
 */
export const Enforce = ({
  children,
  hasPermission = true,
  resource,
  action
}: EnforceProps) => {
  const isAuthEnabled = process.env.NEXT_PUBLIC_MIDAZ_AUTH_ENABLED === 'true'

  // Se auth não está habilitado, sempre oculta
  if (!isAuthEnabled) {
    return null
  }

  // Se auth está habilitado, verifica hasPermission
  if (!hasPermission) {
    return null
  }

  return <>{children}</>
}

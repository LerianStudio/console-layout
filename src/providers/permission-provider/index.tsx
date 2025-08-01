'use client'

import React from 'react'
import { validatePermissions } from './validate-permissions'
import { useGetPermissions } from '@/client/permissions'
import { getRuntimeEnv } from '@/utils/runtime-env-utils'

export type Permissions = Record<string, string[]>

type PermissionContextProps = {
  permissions: Permissions
  validate: (resource: string, action: string) => boolean
}

const PermissionContext = React.createContext<PermissionContextProps>(
  {} as PermissionContextProps
)

export const usePermissions = () => {
  const context = React.useContext(PermissionContext)

  if (!context) {
    throw new Error('usePermissions must be used within a PermissionProvider')
  }

  return context
}

type PermissionProviderProps = React.PropsWithChildren & {
  permissions?: Permissions
  wildcard?: string
}

export const PermissionProvider = ({
  permissions: permissionsProps = {},
  wildcard = '*',
  children
}: PermissionProviderProps) => {
  const { data: permissions = {} } = useGetPermissions({
    placeholderData: permissionsProps,
    enabled:
      getRuntimeEnv('NEXT_PUBLIC_MIDAZ_AUTH_ENABLED') === 'true' ||
      process.env.NEXT_PUBLIC_MIDAZ_AUTH_ENABLED === 'true'
  })

  const validate = (resource: string, action: string) => {
    const hasPermission = validatePermissions(
      permissions,
      resource,
      action,
      wildcard
    )
    return hasPermission
  }

  return (
    <PermissionContext.Provider value={{ permissions, validate }}>
      {children}
    </PermissionContext.Provider>
  )
}

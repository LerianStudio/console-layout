'use client'

import { usePermissions } from './index'

type EnforceProps = React.PropsWithChildren & {
  resource: string
  action: string
}

export const Enforce = ({ resource, action, children }: EnforceProps) => {
  const isAuthEnabled = process.env.NEXT_PUBLIC_MIDAZ_AUTH_ENABLED === 'true'

  if (!isAuthEnabled) {
    return children
  }

  const { validate } = usePermissions()

  const actions = action.split(',').map((a) => a.trim())

  const hasPermission = actions.some((singleAction) =>
    validate(resource, singleAction)
  )

  if (!validate || !hasPermission) {
    return null
  }

  return children
}

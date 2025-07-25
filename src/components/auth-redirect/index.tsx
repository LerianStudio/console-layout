import { getRuntimeEnv } from '@/utils/runtime-env-utils'
import { getServerSession, NextAuthOptions } from 'next-auth'
import { redirect, RedirectType } from 'next/navigation'
import React from 'react'

export type AuthRedirectProps = React.PropsWithChildren & {
  nextAuthOptions: NextAuthOptions
}

export async function AuthRedirect({
  nextAuthOptions,
  children
}: AuthRedirectProps) {
  if (process.env.PLUGIN_AUTH_ENABLED === 'true') {
    const session = await getServerSession(nextAuthOptions)

    const baseUrl = getRuntimeEnv('NEXT_PUBLIC_MIDAZ_CONSOLE_BASE_URL')

    if (!session) {
      redirect(`${baseUrl}/signin`, RedirectType.replace)
    }
  }

  return <>{children}</>
}

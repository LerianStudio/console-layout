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

    if (!session) {
      redirect('/signin', RedirectType.replace)
    }
  }

  return <>{children}</>
}

'use client'

import React from 'react'
import { createIntl, IntlConfig, IntlShape } from '@formatjs/intl'

type ClientLocalizationProviderProps = React.PropsWithChildren & {
  locale: string
  messages: IntlConfig['messages']
}

type IntlContextProps = {
  intl: IntlShape
}

export const IntlContext = React.createContext<IntlContextProps>(
  {} as IntlContextProps
)

/**
 * Client side of LocalizationProvider, to allow hooks usage on client side components
 */
export const ClientLocalizationProvider = ({
  locale,
  messages,
  children
}: ClientLocalizationProviderProps) => {
  const intl = React.useMemo(
    () => createIntl({ locale, messages }),
    [locale, messages]
  )

  intl.messages

  return (
    <IntlContext.Provider value={{ intl }}>{children}</IntlContext.Provider>
  )
}

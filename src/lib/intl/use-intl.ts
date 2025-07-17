'use client'

import { useContext } from 'react'
import { IntlContext } from './client-localization-provider'

/**
 * Hook to get the intl object from the context
 * @returns IntlShape
 */
export function useIntl() {
  const context = useContext(IntlContext)
  if (context === undefined) {
    throw new Error('useIntl must be used within a ClientLocalizationProvider')
  }
  return context.intl
}

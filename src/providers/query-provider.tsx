'use client'

import { ReactNode } from 'react'
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient as useTanstackQueryClient
} from '@tanstack/react-query'

export function useLayoutQueryClient() {
  return useTanstackQueryClient()
}

export const QueryProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false
      }
    }
  })

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

'use client'

import { ReactNode, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

type Props = {
  children: ReactNode
}

// Create QueryClient outside of component to prevent recreation on every render
const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Prevent refetching on window focus to reduce network requests
        refetchOnWindowFocus: false,
        // Set reasonable stale time to prevent excessive refetching
        staleTime: 30 * 1000, // 30 seconds
        // Prevent refetching on mount if data is recent
        refetchOnMount: 'always',
        // Retry failed requests with exponential backoff
        retry: (failureCount, error: any) => {
          // Don't retry on 4xx errors
          if (error?.status >= 400 && error?.status < 500) {
            return false
          }
          return failureCount < 3
        },
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000)
      },
      mutations: {
        // Prevent automatic retries for mutations
        retry: false
      }
    }
  })
}

export const QueryProvider = ({ children }: Props) => {
  // Use useState to create QueryClient only once per component mount
  const [queryClient] = useState(() => createQueryClient())

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

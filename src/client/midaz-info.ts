'use client'

import { useQuery } from '@tanstack/react-query'
import { getFetcher } from './fetcher'
import { MidazInfoDto } from '@/types/midaz-info-dto'

export const useGetMidazInfo = () => {
  return useQuery<MidazInfoDto>({
    queryKey: ['midaz-info'],
    queryFn: getFetcher('/api/midaz/info'),
    staleTime: Infinity, // Cache "forever"
    gcTime: Infinity, // Cache "forever"
    refetchOnWindowFocus: false, // No need to refetch on focus
    refetchOnReconnect: false // No need to refetch on reconnect
  })
}

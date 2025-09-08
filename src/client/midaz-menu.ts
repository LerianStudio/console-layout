'use client'

import { MidazMenuDto } from '@/types/midaz-menu-dto'
import { useQuery } from '@tanstack/react-query'
import { getFetcher } from './fetcher'

export const useGetMidazMenu = () => {
  return useQuery<MidazMenuDto[]>({
    queryKey: ['midaz-menu'],
    queryFn: getFetcher('/api/midaz/menu'),
    staleTime: 60 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false
  })
}

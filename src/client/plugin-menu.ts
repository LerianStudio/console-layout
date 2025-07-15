'use client'

import { useQuery } from '@tanstack/react-query'
import { PluginManifestDto } from '@/types'
import { getFetcher } from './fetcher'

export const useGetPluginMenus = () => {
  return useQuery<PluginManifestDto[]>({
    queryKey: ['plugin-menus'],
    queryFn: getFetcher('/api/plugin/menu'),
    staleTime: 60 * 60 * 1000, // 1 hour
    gcTime: 60 * 60 * 1000, // 1 hour
    refetchOnWindowFocus: false // Desabilita refetch no foco
  })
}

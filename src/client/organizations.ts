'use client'

import { useQuery } from '@tanstack/react-query'
import { PaginationDto } from '@/types/pagination-dto'
import { OrganizationDto } from '@/types/organization-dto'
import { getFetcher, getPaginatedFetcher } from './fetcher'
import { PaginationRequestDto } from '@/types/request-dto'

export type UseListOrganizationsProps = {
  filters?: PaginationRequestDto
}

export const useListOrganizations = ({
  filters,
  ...options
}: UseListOrganizationsProps) => {
  return useQuery<PaginationDto<OrganizationDto>>({
    queryKey: ['organizations'],
    queryFn: getPaginatedFetcher(`/api/organizations`, filters),
    staleTime: 60 * 60 * 1000,
    refetchInterval: 2 * 60 * 1000,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    ...options
  })
}

export type UseGetOrganizationProps = {
  organizationId: string
  onError?: (error: any) => void
}

export const useGetOrganization = ({
  organizationId,
  ...options
}: UseGetOrganizationProps) => {
  return useQuery({
    queryKey: ['organizations', organizationId],
    queryFn: getFetcher(`/api/organizations/${organizationId}`),
    staleTime: 60 * 60 * 1000,
    refetchInterval: 2 * 60 * 1000,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    ...options
  })
}

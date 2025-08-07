'use client'

import { useQuery } from '@tanstack/react-query'
import { PaginationDto } from '@/types/pagination-dto'
import { LedgerDto } from '@/types/ledger-dto'
import { getFetcher, getPaginatedFetcher } from './fetcher'
import { PaginationRequestDto } from '@/types/request-dto'

interface UseListLedgersProps {
  organizationId: string
  filters?: PaginationRequestDto
}

export const useListLedgers = ({
  organizationId,
  filters,
  ...options
}: UseListLedgersProps) => {
  return useQuery<PaginationDto<LedgerDto>>({
    queryKey: ['ledgers', organizationId],
    queryFn: getPaginatedFetcher(
      `/api/organizations/${organizationId}/ledgers/ledgers-assets`,
      filters
    ),
    staleTime: 60 * 60 * 1000,
    refetchInterval: 2 * 60 * 1000,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    ...options
  })
}

export type UseGetLedgerProps = {
  organizationId: string
  ledgerId: string
}

export const useGetLedger = ({
  organizationId,
  ledgerId,
  ...options
}: UseGetLedgerProps) => {
  return useQuery({
    queryKey: ['ledgers', organizationId, ledgerId],
    queryFn: getFetcher(
      `/api/organizations/${organizationId}/ledgers/${ledgerId}`
    ),
    staleTime: 60 * 60 * 1000,
    refetchInterval: 2 * 60 * 1000,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    ...options
  })
}

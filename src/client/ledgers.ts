'use client'

import { useQuery } from '@tanstack/react-query'
import { PaginationDto } from '@/types/pagination-dto'
import { LedgerDto } from '@/types/ledger-dto'
import { getFetcher, getPaginatedFetcher } from './fetcher'

interface UseListLedgersProps {
  organizationId: string
  page?: number
  limit?: number
}

export const useListLedgers = ({
  organizationId,
  page = 1,
  limit = 10,
  ...options
}: UseListLedgersProps & Record<string, any>) => {
  return useQuery<PaginationDto<LedgerDto>>({
    queryKey: ['ledgers', organizationId, { page, limit }],
    queryFn: getPaginatedFetcher(
      `/api/organizations/${organizationId}/ledgers`,
      { page, limit }
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

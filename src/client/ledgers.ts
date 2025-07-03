"use client";

import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { LedgerDto, PaginationDto } from "@/types";
import {
  deleteFetcher,
  getFetcher,
  getPaginatedFetcher,
  patchFetcher,
  postFetcher,
} from "./fetcher";

interface UseListLedgersProps {
  organizationId: string;
  page?: number;
  limit?: number;
}

export const useListLedgers = ({
  organizationId,
  page = 1,
  limit = 10,
  ...options
}: UseListLedgersProps & Record<string, any>) => {
  return useQuery<PaginationDto<LedgerDto>>({
    queryKey: ["ledgers", organizationId, { page, limit }],
    queryFn: getPaginatedFetcher(
      `/api/organizations/${organizationId}/ledgers`,
      { page, limit }
    ),
    enabled: !!organizationId,
    staleTime: 60 * 60 * 1000, // 1 hour
    gcTime: 60 * 60 * 1000, // 1 hour
    refetchInterval: 2 * 60 * 1000, // Polling a cada 2 minutos
    refetchIntervalInBackground: false, // Só faz polling com aba ativa
    refetchOnWindowFocus: false, // Desabilita refetch no foco (já tem polling)
    ...options,
  });
};

export type UseGetLedgerProps = {
  organizationId: string;
  ledgerId: string;
};

export const useGetLedger = ({
  organizationId,
  ledgerId,
  ...options
}: UseGetLedgerProps) => {
  return useQuery({
    queryKey: ["ledgers", organizationId, ledgerId],
    queryFn: getFetcher(
      `/api/organizations/${organizationId}/ledgers/${ledgerId}`
    ),
    enabled: !!organizationId && !!ledgerId,
    staleTime: 60 * 60 * 1000, // 1 hour
    gcTime: 60 * 60 * 1000, // 1 hour
    refetchInterval: 2 * 60 * 1000, // Polling a cada 2 minutos
    refetchIntervalInBackground: false, // Só faz polling com aba ativa
    refetchOnWindowFocus: false, // Desabilita refetch no foco (já tem polling)
    ...options,
  });
};

export const useCreateLedger = ({
  organizationId,
  onSuccess,
  ...options
}: { organizationId: string } & UseMutationOptions<LedgerDto, Error, any>) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["ledgers", organizationId],
    mutationFn: postFetcher(`/api/organizations/${organizationId}/ledgers`),
    ...options,
    onSuccess: (data: LedgerDto, variables: any, context: unknown) => {
      queryClient.invalidateQueries({
        queryKey: ["ledgers", organizationId],
      });
      onSuccess?.(data, variables, context);
    },
  });
};

export const useUpdateLedger = ({
  organizationId,
  ledgerId,
  onSuccess,
  ...options
}: UseGetLedgerProps & UseMutationOptions<LedgerDto, Error, any>) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["ledgers", organizationId, ledgerId],
    mutationFn: patchFetcher(
      `/api/organizations/${organizationId}/ledgers/${ledgerId}`
    ),
    ...options,
    onSuccess: (data: LedgerDto, variables: any, context: unknown) => {
      queryClient.invalidateQueries({
        queryKey: ["ledgers", organizationId],
      });
      onSuccess?.(data, variables, context);
    },
  });
};

export const useDeleteLedger = ({
  organizationId,
  ledgerId,
  onSuccess,
  ...options
}: UseGetLedgerProps & UseMutationOptions<LedgerDto, Error, unknown>) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["ledgers", organizationId, ledgerId],
    mutationFn: () =>
      deleteFetcher(`/api/organizations/${organizationId}/ledgers`)({
        id: ledgerId,
      }),
    ...options,
    onSuccess: (data: LedgerDto, variables: unknown, context: unknown) => {
      queryClient.invalidateQueries({
        queryKey: ["ledgers", organizationId],
      });
      onSuccess?.(data, variables, context);
    },
  });
};

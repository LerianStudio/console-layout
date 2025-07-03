"use client";

import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { OrganizationDto, PaginationDto } from "@/types";
import {
  deleteFetcher,
  getFetcher,
  patchFetcher,
  postFetcher,
} from "./fetcher";

export const useListOrganizations = ({ ...options }) => {
  return useQuery<PaginationDto<OrganizationDto>>({
    queryKey: ["organizations"],
    queryFn: getFetcher(`/api/organizations`),
    staleTime: 60 * 60 * 1000, // 1 hour
    gcTime: 60 * 60 * 1000, // 1 hour
    refetchInterval: 2 * 60 * 1000, // Polling a cada 2 minutos
    refetchIntervalInBackground: false, // Só faz polling com aba ativa
    refetchOnWindowFocus: false, // Desabilita refetch no foco (já tem polling)
    ...options,
  });
};

export type UseGetOrganizationProps = {
  organizationId: string;
  onError?: (error: any) => void;
};

export const useGetOrganization = ({
  organizationId,
  ...options
}: UseGetOrganizationProps) => {
  return useQuery({
    queryKey: ["organizations", organizationId],
    queryFn: getFetcher(`/api/organizations/${organizationId}`),
    staleTime: 60 * 60 * 1000, // 1 hour
    gcTime: 60 * 60 * 1000, // 1 hour
    refetchInterval: 2 * 60 * 1000, // Polling a cada 2 minutos
    refetchIntervalInBackground: false, // Só faz polling com aba ativa
    refetchOnWindowFocus: false, // Desabilita refetch no foco (já tem polling)
    ...options,
  });
};

export const useCreateOrganization = ({
  onSuccess,
  ...options
}: UseMutationOptions<OrganizationDto, Error, any>) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["organizations"],
    mutationFn: postFetcher(`/api/organizations`),
    ...options,
    onSuccess: (data: OrganizationDto, variables: any, context: unknown) => {
      queryClient.invalidateQueries({
        queryKey: ["organizations"],
      });
      onSuccess?.(data, variables, context);
    },
  });
};

export const useUpdateOrganization = ({
  organizationId,
  onSuccess,
  ...options
}: UseGetOrganizationProps &
  UseMutationOptions<OrganizationDto, Error, any>) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["organizations"],
    mutationFn: patchFetcher(`/api/organizations/${organizationId}`),
    ...options,
    onSuccess: (data: OrganizationDto, variables: any, context: unknown) => {
      queryClient.invalidateQueries({
        queryKey: ["organizations"],
      });
      onSuccess?.(data, variables, context);
    },
  });
};

export const useDeleteOrganization = ({
  onSuccess,
  ...options
}: UseMutationOptions<OrganizationDto, Error, unknown>) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["organizations"],
    mutationFn: deleteFetcher(`/api/organizations`),
    ...options,
    onSuccess: (
      data: OrganizationDto,
      variables: unknown,
      context: unknown
    ) => {
      queryClient.invalidateQueries({
        queryKey: ["organizations"],
      });
      onSuccess?.(data, variables, context);
    },
  });
};

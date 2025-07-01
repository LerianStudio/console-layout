"use client";

import { useQuery } from "@tanstack/react-query";
import { PluginManifestDto } from "@/types";
import { getFetcher } from "./fetcher";

export const useGetPluginMenus = () => {
  return useQuery<PluginManifestDto[]>({
    queryKey: ["plugin-menu"],
    queryFn: getFetcher("/api/plugin/menu"),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

"use client";

import { useQuery } from "@tanstack/react-query";
import { PluginManifestDto } from "@/types";
import { getFetcher } from "./fetcher";

export const useGetPluginMenus = () => {
  return useQuery<PluginManifestDto[]>({
    queryKey: ["plugin-menus"],
    queryFn: getFetcher("/api/plugin/menus"),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

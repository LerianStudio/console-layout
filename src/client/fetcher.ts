"use client";

import { signOut } from "next-auth/react";

interface FetcherConfig {
  baseUrl: string;
  onUnauthorized?: () => void;
}

let config: FetcherConfig = {
  baseUrl: "",
  onUnauthorized: () => signOut({ callbackUrl: "/login" }),
};

export const configureFetcher = (newConfig: Partial<FetcherConfig>) => {
  config = { ...config, ...newConfig };
};

const createQueryString = (params?: Record<string, any>) => {
  if (!params) return "";
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      searchParams.append(key, String(value));
    }
  });
  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : "";
};

const responseHandler = async (response: Response) => {
  if (!response.ok) {
    if (response.status === 401 && config.onUnauthorized) {
      config.onUnauthorized();
      return;
    }
    const errorMessage = await response.json();
    throw new Error(errorMessage.message);
  }
  return await response.json();
};

export const getFetcher = (url: string) => {
  return async () => {
    const response = await fetch(`http://localhost:8081${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return responseHandler(response);
  };
};

export const getPaginatedFetcher = (
  url: string,
  params?: Record<string, any>
) => {
  return async () => {
    const response = await fetch(
      `http://localhost:8081${url}${createQueryString(params)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return responseHandler(response);
  };
};

export const postFetcher = (url: string) => {
  return async (body: any) => {
    const response = await fetch(`http://localhost:8081${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return responseHandler(response);
  };
};

export const patchFetcher = (url: string) => {
  return async (body: any) => {
    const response = await fetch(`http://localhost:8081${url}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return responseHandler(response);
  };
};

export const deleteFetcher = (url: string) => {
  return async ({ id }: { id: string }) => {
    const response = await fetch(`http://localhost:8081${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return responseHandler(response);
  };
};

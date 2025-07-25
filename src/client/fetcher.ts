'use client'

import { getRuntimeEnv } from '@/utils/runtime-env-utils'
import { signOut } from 'next-auth/react'

interface FetcherConfig {
  baseUrl: string
  onUnauthorized?: () => void
}

/**
 * Gets the base URL for API calls
 * Priority: manual override > environment variable > default localhost
 */
const getBaseUrl = (manualBaseUrl?: string): string => {
  if (manualBaseUrl) {
    return manualBaseUrl
  }

  // Access Next.js environment variable
  // NEXT_PUBLIC_ variables are available in both server and client
  const envBaseUrl =
    getRuntimeEnv('CLIENT_MIDAZ_CONSOLE_BASE_URL') ||
    process.env.NEXT_PUBLIC_MIDAZ_CONSOLE_BASE_URL

  if (envBaseUrl) {
    return envBaseUrl
  }

  // Default fallback for development
  const defaultUrl = 'http://localhost:3000'

  if (typeof window !== 'undefined') {
    console.warn(
      `NEXT_PUBLIC_MIDAZ_CONSOLE_BASE_URL not found. Using default: ${defaultUrl}`
    )
  }

  return defaultUrl
}

let config: FetcherConfig = {
  baseUrl: getBaseUrl(),
  onUnauthorized: () => signOut({ callbackUrl: '/login' })
}

export const configureFetcher = (newConfig: Partial<FetcherConfig>) => {
  // If baseUrl is not provided, use the automatic detection
  const finalConfig = {
    ...config,
    ...newConfig,
    baseUrl: newConfig.baseUrl || getBaseUrl()
  }

  config = finalConfig

  if (typeof window !== 'undefined') {
    console.log(`Fetcher configured with baseUrl: ${config.baseUrl}`)
  }
}

const createQueryString = (params?: Record<string, any>) => {
  if (!params) return ''
  const searchParams = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      searchParams.append(key, String(value))
    }
  })
  const queryString = searchParams.toString()
  return queryString ? `?${queryString}` : ''
}

const responseHandler = async (response: Response) => {
  if (!response.ok) {
    if (response.status === 401 && config.onUnauthorized) {
      config.onUnauthorized()
      return
    }
    const errorMessage = await response.json()
    throw new Error(errorMessage.message)
  }
  return await response.json()
}

export const getFetcher = (url: string) => {
  return async () => {
    const response = await fetch(`${config.baseUrl}${url}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return responseHandler(response)
  }
}

export const getPaginatedFetcher = (
  url: string,
  params?: Record<string, any>
) => {
  return async () => {
    const response = await fetch(
      `${config.baseUrl}${url}${createQueryString(params)}`,
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    return responseHandler(response)
  }
}

export const postFetcher = (url: string) => {
  return async (body: any) => {
    const response = await fetch(`${config.baseUrl}${url}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    return responseHandler(response)
  }
}

export const patchFetcher = (url: string) => {
  return async (body: any) => {
    const response = await fetch(`${config.baseUrl}${url}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    return responseHandler(response)
  }
}

export const deleteFetcher = (url: string) => {
  return async ({ id }: { id: string }) => {
    const response = await fetch(`${config.baseUrl}${url}/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return responseHandler(response)
  }
}

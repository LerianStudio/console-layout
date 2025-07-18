export interface OrganizationDto {
  id: string
  legalName: string
  avatar?: string
  metadata?: {
    onboarding?: boolean
  }
}

export interface LedgerDto {
  id: string
  name: string
  organizationId: string
}

export enum VersionStatus {
  UpToDate = 'up-to-date',
  Outdated = 'outdated'
}

export type MidazInfoDto = {
  currentVersion: string
  latestVersion: string
  versionStatus: VersionStatus
}

export interface PluginManifestDto {
  id: string
  name: string
  title: string
  description: string
  version: string
  route: string
  icon: string
  enabled: boolean
  entry: string
  healthcheck: string
  host: string
  author: string
}

export interface PaginationDto<T> {
  items: T[]
  limit: number
  page: number
  total?: number
}

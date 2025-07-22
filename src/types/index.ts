export enum VersionStatus {
  UpToDate = 'up-to-date',
  Outdated = 'outdated'
}

export type MidazInfoDto = {
  currentVersion: string
  latestVersion: string
  versionStatus: VersionStatus
}

export type PluginManifestDto = {
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

type AuthResourceDto = string
type AuthActionDto = string

export type AuthPermissionDto = Record<AuthResourceDto, AuthActionDto[]>

export interface PaginationDto<T> {
  items: T[]
  limit: number
  page: number
  total?: number
}

type AuthResourceDto = string
type AuthActionDto = string

export type AuthPermissionDto = Record<AuthResourceDto, AuthActionDto[]>

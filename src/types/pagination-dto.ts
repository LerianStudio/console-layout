export type PaginationDto<T> = {
  items: T[]
  limit: number
  page: number
  total?: number
}

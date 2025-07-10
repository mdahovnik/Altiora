export type typeApiResponseWithPagination<T> = {
  results: T[]
  total: number
  page: number
  perPage: number
}

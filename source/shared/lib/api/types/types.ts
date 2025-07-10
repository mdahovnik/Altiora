export type typeResponseType = 'json' | 'text' | 'blob' | 'arrayBuffer'

export type typeApiErrorResponse = {
  status: number
  statusText: string
  message: string
  details?: unknown
}

export type typeApiData<D> = {
  data: D
}

export type typeApiError = {
  error: typeApiErrorResponse
}

export type typeApiResponse<D> = typeApiData<D> | typeApiError

export type typeBackendApiQueryParams = Record<string, string | number | boolean>

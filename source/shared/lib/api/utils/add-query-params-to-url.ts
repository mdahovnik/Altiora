export const addQueryParamsToUrl = (
  url: string,
  queryParams?: Record<string, string | number | boolean | (string | number | boolean)[]>
): string => {
  if (!queryParams) return url

  const searchParams = new URLSearchParams()

  for (const key of Object.keys(queryParams)) {
    const value = queryParams[key]

    if (Array.isArray(value)) {
      for (const item of value) {
        searchParams.append(key, item.toString())
      }
    } else if (value !== undefined) {
      searchParams.append(key, value.toString())
    }
  }

  const queryString = searchParams.toString()
  return queryString ? `${url}?${queryString}` : url
}

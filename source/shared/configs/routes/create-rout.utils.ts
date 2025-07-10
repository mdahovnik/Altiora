/* eslint-disable @typescript-eslint/no-unused-vars */
type ExtractRouteParams<T extends string> = T extends `${infer _Start}:${infer Param}/${infer Rest}`
  ? { [K in Param | keyof ExtractRouteParams<`/${Rest}`>]: string }
  : T extends `${infer _Start}:${infer Param}`
    ? { [K in Param]: string }
    : Record<never, never>
/* eslint-enable @typescript-eslint/no-unused-vars */

export const createRoute = <T extends string>(
  url: T,
  params: ExtractRouteParams<T>,
  query?: Record<string, string>
): string => {
  let result: string = url

  for (const key in params) {
    result = result.replace(new RegExp(`:${key}`, 'g'), `${params[key]}`)
  }

  if (query && Object.keys(query).length > 0) {
    const queryString = Object.entries(query)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&')

    result += (result.includes('?') ? '&' : '?') + queryString
  }

  return result
}

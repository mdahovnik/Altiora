import type { routes } from './routes.config'

export type typeRouts = { [K in keyof typeof routes]: string }

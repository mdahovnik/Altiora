import styles from './styles.module.scss'
import { LogoSize } from './types'

export const iconSizeMap: Record<LogoSize, 'sm' | 'md' | 'lg'> = {
  xs: 'sm',
  md: 'md',
  lg: 'lg'
}

export const sizeMap: Record<LogoSize, { width: number; height: number; textClass: string }> = {
  xs: { width: 30, height: 40, textClass: styles.textXs },
  md: { width: 36, height: 48, textClass: styles.textMd },
  lg: { width: 60, height: 80, textClass: styles.textLg }
}

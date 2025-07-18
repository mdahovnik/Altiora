type LogoVariant = 'long' | 'short' | 'shortOutline'
export type LogoSize = 'xs' | 'md' | 'lg'

export type LogoProps = {
  variant: LogoVariant
  size: LogoSize
  className?: string
  text?: string
}

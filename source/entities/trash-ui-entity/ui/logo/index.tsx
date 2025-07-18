import { UIContainer } from '../ui-container'

import { UILogo } from '@shared/ui/logo'

export const Logo: React.FC = () => {
  return (
    <UIContainer
      title="Logo"
      description="Логотип со всеми props:"
      props={[
        {
          key: 'variant',
          value:
            '("long" | "short" | "shortOutline") вариант отображения: long - иконка + текст; short - иконка; shortOutline - иконка без заливки'
        },
        {
          key: 'size',
          value: '("xs" | "md" | "lg") размер логотипа'
        }
      ]}
      components={
        <>
          <UILogo variant="long" size="lg" />
          <UILogo variant="long" size="md" />
          <UILogo variant="long" size="xs" />
          <UILogo variant="short" size="lg" />
          <UILogo variant="short" size="md" />
          <UILogo variant="short" size="xs" />
          <UILogo variant="shortOutline" size="md" />
          <UILogo variant="shortOutline" size="xs" />
        </>
      }
    />
  )
}

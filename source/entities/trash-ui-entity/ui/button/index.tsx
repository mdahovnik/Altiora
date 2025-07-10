'use client'

import React from 'react'
import { Button } from '@shared/ui/button'
import { UIContainer } from '../ui-container'

export const UIButton: React.FC = () => {
  return (
    <UIContainer
      title="Button"
      description="Кнопка со всеми стандартными props и дополнительными:"
      props={[
        { key: 'variant', value: '("default" | "fill") вариант отображения: default - по умолчанию; fill - заливка' },
        { key: 'disabled', value: '(boolean) отключение кнопки' }
      ]}
      components={
        <>
          <Button>Button</Button>

          <Button disabled>Button</Button>

          <Button variant="fill" onClick={() => alert('fill')}>
            Button
          </Button>

          <Button variant="fill" disabled>
            Button
          </Button>
        </>
      }
    />
  )
}

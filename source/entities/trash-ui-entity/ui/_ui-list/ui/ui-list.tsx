'use client'

import { UIButton } from '../../button'
import Input from '../../input'
import classes from '../styles/styles.module.scss'

export const UIList: React.FC = () => {
  return (
    <div className={classes.container}>
      <UIButton />
      <Input label="" supportingText="инпут" value="" onClear={() => {}} />
      <Input label="" supportingText="инпут с ошибкой" value="" error onClear={() => {}} />
      {/* Добавляем компоненты ниже */}
    </div>
  )
}

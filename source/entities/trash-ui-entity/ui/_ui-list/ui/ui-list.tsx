'use client'

import { UIButton } from '../../button'
import { UIInput } from '../../input'
import classes from '../styles/styles.module.scss'

export const UIList: React.FC = () => {
  return (
    <div className={classes.container}>
      <UIButton />
      <UIInput />
      {/* Добавляем компоненты ниже */}
    </div>
  )
}

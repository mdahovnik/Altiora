'use client'

import { UIButton } from '../../button'
import { UIMainBlock } from '../../main-block'
import { UICheckbox } from '../../checkbox'
import { MainMenuMobileTest } from '../../main-menu-mobile-test'
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

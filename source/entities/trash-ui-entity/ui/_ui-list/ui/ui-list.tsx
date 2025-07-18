import { UIButton } from '../../button'
import { Logo } from '../../logo'
import { UIMainBlock } from '../../main-block'
import classes from '../styles/styles.module.scss'

export const UIList: React.FC = () => {
  return (
    <div className={classes.container}>
      <UIMainBlock />

      <UIButton />
      <Logo />
      {/* Добавляем компоненты ниже */}
    </div>
  )
}

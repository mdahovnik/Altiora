import { UIButton } from '../../button'
import { UIMainBlock } from '../../main-block'
import { UISliderCard } from '../../slider-card'
import classes from '../styles/styles.module.scss'

export const UIList: React.FC = () => {
  return (
    <div className={classes.container}>
      <UIMainBlock />

      <UIButton />
      <UISliderCard />
      {/* Добавляем компоненты ниже */}
    </div>
  )
}

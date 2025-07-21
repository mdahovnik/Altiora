import { UIButton } from '../../button'
import { UICardComponent } from '../../card-component/card-component'
import { UICheckbox } from '../../checkbox'
import { UIIcons } from '../../icons'
import { UIMainBlock } from '../../main-block'
import { UIMarquee } from '../../marquee'
import { UISliderCard } from '../../slider-card'
import classes from '../styles/styles.module.scss'

export const UIList: React.FC = () => {
  return (
    <div className={classes.container}>
      <UIMainBlock />

      <UIButton />

      <UIMarquee />
      <UICardComponent />

      <UIIcons />
      <UISliderCard />
      {/* Добавляем компоненты ниже */}
      <UICheckbox />
    </div>
  )
}

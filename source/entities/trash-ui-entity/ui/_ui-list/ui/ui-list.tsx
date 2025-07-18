import { UIButton } from '../../button'
import { UIFooterInfoBlock } from '../../footer-info-block'
import { UIMainBlock } from '../../main-block'
import classes from '../styles/styles.module.scss'

export const UIList: React.FC = () => {
  return (
    <div className={classes.container}>
      <UIMainBlock />

      <UIButton />
      <UIFooterInfoBlock />
      {/* Добавляем компоненты ниже */}
    </div>
  )
}

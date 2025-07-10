import classes from './styles.module.scss'

export const Loader: React.FC = () => {
  return (
    <div className={classes.container}>
      <span className={classes.loader}></span>
    </div>
  )
}

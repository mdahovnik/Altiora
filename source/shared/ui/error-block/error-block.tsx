import classes from './styles.module.scss'

type typeProps = React.HTMLAttributes<HTMLDivElement> & {
  onReset?: () => void
}

export const ErrorBlock: React.FC<typeProps> = ({ onReset, ...otherProps }) => {
  return (
    <div className={classes.errorContainer} {...otherProps}>
      <p>Something went wrong...</p>
      {onReset && <button onClick={onReset}>Try again</button>}
    </div>
  )
}

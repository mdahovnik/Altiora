import classes from '../styles/main-menu-desktop.module.scss'
import type { typeMainMenuProps } from '../types/types'
import clsx from 'clsx'
import Link from 'next/link'

export const MainMenuDesktop: React.FC<typeMainMenuProps> = ({ menuList, className, ...otherProps }) => {
  return (
    <div className={clsx(classes.desktopMenuContainer, className)} {...otherProps}>
      {menuList.map(item => (
        <Link href={item.rout} key={item.title} prefetch={false}>
          {item.title}
        </Link>
      ))}
    </div>
  )
}

import classes from '../styles/main-menu-mobile.module.scss'
import type { typeMainMenuProps } from '../types/types'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'

export const MainMenuMobile: React.FC<typeMainMenuProps> = ({ menuList }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={classes.mobileMenuContainer}>☰</DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={classes.menuContainer} sideOffset={4} align="end">
          {menuList.map(item => (
            <DropdownMenu.Item className={classes.link} key={item.title} asChild>
              <Link href={item.rout}>{item.title}</Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

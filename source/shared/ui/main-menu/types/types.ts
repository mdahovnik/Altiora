export type typeMainMenuProps = React.HTMLAttributes<HTMLDivElement> & {
  menuList: typeMainMenuItem[]
}

export type typeMainMenuItem = {
  title: string
  rout: string
}

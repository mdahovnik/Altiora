import { routes } from '@shared/configs/routes'
import { createRoute } from '@shared/configs/routes/create-rout.utils'
import type { typeMainMenuItem } from '@shared/ui/main-menu/types/types'

export const mainMenu: typeMainMenuItem[] = [
  {
    title: 'Home',
    rout: routes.mainPage
  },
  {
    title: 'UI',
    rout: routes.ui
  },
  {
    title: 'Posts',
    rout: routes.postList
  },
  {
    title: 'Complex',
    rout: createRoute(routes.complexRout, { id: '1', value: 'value' })
  }
]

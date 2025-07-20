'use client'

import { usePathname } from 'next/navigation'
import { useRouter } from 'nextjs-toploader/app'

import { ErrorBlock } from '@shared/ui/error-block'

export const ServerResponseError: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()

  const refreshPage = () => {
    router.replace(pathname)
  }

  return <ErrorBlock onReset={refreshPage} />
}

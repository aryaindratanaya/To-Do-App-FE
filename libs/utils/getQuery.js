import { useRouter } from 'next/router'

export default function getQuery() {
  const router = useRouter()
  return router.asPath.split('?')[1] || ''
}

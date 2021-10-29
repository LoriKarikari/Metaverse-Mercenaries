import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useStore from '../store'
import Loader from './Loader'

type Props = {
  children: JSX.Element
}

export default function PrivateRoute({ children }: Props) {
  const router = useRouter()
  const account = useStore((state) => state.account)
  const loading = useStore((state) => state.loading)
  const protectedRoutes = ['/', '/collection', '/arena']
  const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1

  useEffect(() => {
    if (!account && !loading && pathIsProtected) {
      router.push('/sign-in')
    }
  }, [account, pathIsProtected])

  if (!account && !loading && pathIsProtected) {
    return <Loader />
  }

  return children
}

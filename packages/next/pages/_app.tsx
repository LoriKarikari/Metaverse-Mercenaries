import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import 'tailwindcss/tailwind.css'
import Banner from '@components/Banner'
import PrivateRoute from '@components/PrivateRoute'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <PrivateRoute>
        <Hydrate state={pageProps.dehydratedState}>
          <Banner />
          <Component {...pageProps} />
        </Hydrate>
      </PrivateRoute>
    </QueryClientProvider>
  )
}

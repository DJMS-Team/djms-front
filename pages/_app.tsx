import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import RootLayout from '../app/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Head>
        <title>DMajor Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </RootLayout>
  )
}

export default MyApp;

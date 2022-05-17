import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default MyApp

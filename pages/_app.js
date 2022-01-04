import Head from 'next/head'
import { SWRConfig } from 'swr'
import { fetcher } from 'libs/utils/api'
import 'styles/antd.less'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>To Do App</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="A simple to do app. This is a working example of a to-do app using Next.JS."
        />
        <meta
          name="og:title"
          property="og:title"
          content="A simple to do app. This is a working example of a to-do app using Next.JS."
        ></meta>
        <meta
          name="twitter:card"
          content="A simple to do app. This is a working example of a to-do app using Next.JS."
        ></meta>
        <link rel="canonical" href="#"></link>
      </Head>

      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher,
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </>
  )
}

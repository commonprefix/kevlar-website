import * as React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import '@fontsource/red-hat-mono/400.css'
import '@fontsource/red-hat-mono/700.css'
import SEO from '../next-seo.config'

const theme = extendTheme({
  fonts: {
    heading: '"Red Hat Mono", monospace',
    body: '"Red Hat Mono", monospace',
  },
  styles: {
    global: {
      'body, html': {
        padding: 0,
        margin: 0,
      },
      body: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }
    },
  },
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>kevlar - Turn Your Wallet Trustless</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="description" content="Kevlar makes Metamask, or any RPC-based wallet, completely trustless." />
      </Head>
      <DefaultSeo {...SEO} />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App

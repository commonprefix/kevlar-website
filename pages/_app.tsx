import React from 'react'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import { Head } from '../components'
import SEO from '../next-seo.config'
import theme from '../theme'
import '@fontsource/red-hat-mono/400.css'
import '@fontsource/red-hat-mono/700.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head />
      <DefaultSeo {...SEO} />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App

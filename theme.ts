import { extendTheme } from '@chakra-ui/react'

const theme = {
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
}

export default extendTheme(theme)

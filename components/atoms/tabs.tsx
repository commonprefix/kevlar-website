import React from 'react'
import {
  Tabs as ChakraTabs,
  TabsProps as ChakraTabsProps,
} from '@chakra-ui/react'

type TabsProps = Omit<ChakraTabsProps, 'colorScheme' | 'align'>

const Tabs = (props: TabsProps) => {
  return (
    <ChakraTabs align="center" colorScheme="yellow" {...props} />
  )
}

export default Tabs

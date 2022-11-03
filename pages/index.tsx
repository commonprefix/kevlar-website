import React from 'react'
import type { NextPage } from 'next'
import { Stack } from '@chakra-ui/react'
import {
  HeadingContainer,
  SubheadingContainer,
  InstructionsContainer,
  FooterContainer,
} from '../components'

const Home: NextPage = () => {
  return (
    <Stack
      display="flex"
      alignItems="center"
      mx={3}
      mb={10}
      spacing={10}
      textAlign="center"
      mt="90px"
    >
      <HeadingContainer />
      <SubheadingContainer />
      <InstructionsContainer />
      <FooterContainer />
    </Stack>
  )
}

export default Home

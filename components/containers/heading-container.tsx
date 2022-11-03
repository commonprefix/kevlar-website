import React from 'react'
import { Container, Stack, Image, Heading, Text } from '@chakra-ui/react'

const HeadingContainer = () => {
  return (
    <Container>
      <Stack spacing={2}>
        <Image src="/kevlar.png" alt="Kevlar Logo" h="95px" mx="auto" />
        <Heading as="h1" size="lg" fontWeight={700}>kevlar</Heading>
        <Text fontSize="md">Make your wallet trustless.</Text>
      </Stack>
    </Container>
  )
}

export default HeadingContainer

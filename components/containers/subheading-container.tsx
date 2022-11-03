import React from 'react'
import { Container, Text } from '@chakra-ui/react'

const SubheadingContainer = () => {
  return (
    <Container maxW='container.md'>
      <Text fontSize="sm">
        Most wallets rely on centralized, trusted full nodes.
        Kevlar lets you run a light-client-based RPC proxy on your
        device that you can add to any RPC-based wallet.
        With Kevlar, every RPC call made by your wallet is verified
        using Merkle Inclusion proofs.
      </Text>
    </Container>
  )
}

export default SubheadingContainer

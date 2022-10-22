import React from 'react'
import type { NextPage } from 'next'
import {
  Text,
  Stack,
  Box,
  Image,
  Heading,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  Button,
  useClipboard,
} from '@chakra-ui/react'
import { CheckIcon, CopyIcon } from '@chakra-ui/icons'

type CodeProps = {
  code: string
}

const Code = ({ code }: CodeProps) => {
  const [value] = React.useState(code)
  const { hasCopied, onCopy } = useClipboard(value)

  return (
    <InputGroup size='md' width="300px">
      <Input
        value={value}
        isReadOnly
        onClick={onCopy}
      />
      <InputRightElement width='3rem'>
        <IconButton
          h='1.75rem'
          size='sm'
          aria-label="Copy code"
          icon={hasCopied ? <CheckIcon /> : <CopyIcon />}
          onClick={onCopy}
        />
      </InputRightElement>
    </InputGroup>
  )
}

const Home: NextPage = () => {
  return (
    <Stack textAlign="center" spacing={3}>
      <Image src="/kevlar.png" alt="Kevlar Logo" h="128" mx="auto" />
      <Heading as="h1">Kevlar</Heading>
      <Text>Turn your wallet trustless.</Text>
      <Code code="npm install @lighclients/kevlar" />
      <Code code="kevlar" />
    </Stack>
  )
}

export default Home

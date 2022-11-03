import React from 'react'
import { Code, CodeProps } from '@chakra-ui/react'

type CodeSnippetProps = Omit<CodeProps, 'bg | rounded'>

const CodeSnippet = (props: CodeSnippetProps) => {
  return (
    <Code
      p={4}
      bg="gray.100"
      rounded="lg"
      {...props}
    />
  )
}

export default CodeSnippet

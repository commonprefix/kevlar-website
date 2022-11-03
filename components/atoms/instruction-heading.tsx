import React from 'react'
import { Heading, HeadingProps } from '@chakra-ui/react'

type InstructionHeadingProps = Omit<HeadingProps, 'as'|'fontSize'|'fontWeight'|'textTransform'>

const InstructionHeading = (props: InstructionHeadingProps) => {
  return (
    <Heading
      as="h2"
      fontSize="xs"
      fontWeight="700"
      textTransform="uppercase"
      mb={2}
      {...props}
    />
  )
}

export default InstructionHeading

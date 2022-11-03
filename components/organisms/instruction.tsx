import React from 'react'
import { WrapItem, Box, BoxProps } from '@chakra-ui/react'
import { InstructionHeading } from '..'

type InstructionProps = BoxProps & {
  number: number
  title: string
}
 
const Instruction = ({
  number,
  title,
  children,
  ...props
}: InstructionProps) => {
  return (
    <WrapItem flex="1">
      <Box w="100%" {...props}>
        <InstructionHeading>
          {number}. {title}
        </InstructionHeading>
        {children}
      </Box>
    </WrapItem>
  )
}

export default Instruction

import React from 'react'
import { WrapItem, WrapItemProps, Box } from '@chakra-ui/react'

type InstructionStepProps = WrapItemProps & {
  rightIcon?: React.ReactElement,
}

const InstructionStep = ({ children, rightIcon, ...props }: InstructionStepProps) => {
  return (
    <WrapItem display="flex" alignItems="center" {...props}>
      <Box>{children}</Box>
      {rightIcon || null}
    </WrapItem>
  )
}

export default InstructionStep

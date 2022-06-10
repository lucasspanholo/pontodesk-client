import { Flex, FormControlProps } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface FormProps extends FormControlProps{
  onsubmit: () => void;
  children: ReactNode;
}

export function Form({ onsubmit, children, ...rest }: FormProps) {
  return (
    <Flex
      as="form"
      w="100%"
      maxWidth={360}
      p="8"
      borderRadius={8}
      flexDir="column"
      onSubmit={onsubmit}
      {...rest}
    >
      {children}
    </Flex>
  )
}

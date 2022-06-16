import { Button, Icon, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { RiMoonLine, RiSunLine } from 'react-icons/ri'

export default function ButtonLightOrDark({...rest}) {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button onClick={toggleColorMode}
      {...rest}
    >
      {colorMode === 'light' ?
        <Icon as={RiMoonLine} fontSize="20" />
        :
        <Icon as={RiSunLine} fontSize="20" />
      }
    </Button>
  )
}

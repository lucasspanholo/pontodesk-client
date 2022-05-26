import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Header } from '../Header'
import { Sidebar } from '../Sidebar'

export default function Card({children}) {
  return (
    <Flex direction="column" height="100vh">
      <Header />
      <Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6">
        <Sidebar />
        { children }
      </Flex>
    </Flex>
  )
}

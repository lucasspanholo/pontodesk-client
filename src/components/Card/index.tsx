import { Flex } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';

type CardProps = {
  children: ReactElement;
}

export default function Card({ children }: CardProps) {
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

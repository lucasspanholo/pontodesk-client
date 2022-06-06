import { Button, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import Card from '../../components/Card';
import NextLink from "next/link";
import { RiAddLine } from 'react-icons/ri';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';

export default function CallsList() {
  return (
    <Card>
      <Text>Hello calls</Text>
      <NextLink href="/calls/create">
        <Button
          as="a"
          size="sm"
          fontSize="sm"
          colorScheme="pink"
          cursor="pointer"
          leftIcon={<Icon as={RiAddLine} fontSize="20" />}
        >
          Criar novo
        </Button>
      </NextLink>
    </Card>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {['pontodesk.token']: token } = parseCookies(context)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  
  return {
    props: {}
  }
}
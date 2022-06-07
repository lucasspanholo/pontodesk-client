import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { parseCookies } from 'nookies'
import Card from "../components/Card";
import { Charts } from "../components/Charts";

export default function Dashboard() {
  const bg = useColorModeValue('gray.50', 'gray.800')

  return (
    <Card>
      <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
          <Box
            p={["6", "8"]}
            bg={bg}
            borderRadius={8}
          >
            <Charts title="Total de chamados hoje" />
          </Box>

          <Box
            p={["6", "8"]}
            bg={bg}
            borderRadius={8}
          >
            <Charts title="Total de chamados na semana" />
          </Box>

        </SimpleGrid>
    </Card>
  )
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
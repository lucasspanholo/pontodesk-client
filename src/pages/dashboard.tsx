import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Charts } from "../components/Charts";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
  return (
    <Flex direction="column" height="100vh">
      <Header />

      <Flex w="100%" maxWidth={1480} my="6"  mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
          <Box 
            p={["6", "8"]}
            bg="gray.800" 
            borderRadius={8}
            >
              <Charts title="Vendas do dia" />
          </Box>

          <Box 
            p={["6", "8"]}
            bg="gray.800" 
            borderRadius={8}
            >
              <Charts title="Vendas semanais" />
          </Box>

        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
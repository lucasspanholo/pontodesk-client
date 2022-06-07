import { Button, Flex, Icon, IconButton, useBreakpointValue, useColorMode } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { RiMenuLine, RiMoonLine, RiSunLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { api } from "../../services/api";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  const { onOpen } = useSidebarDrawer();
  const { colorMode, toggleColorMode } = useColorMode()


  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20" // formato de espaçamento
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
          mt="2"
        />
      )}

      <Logo />

      <SearchBox showSearchBox={isWideVersion} />

      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ?
          <Icon as={RiMoonLine} fontSize="20" />
          :
          <Icon as={RiSunLine} fontSize="20" />
        }
      </Button>

      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  api.get('/auth/validate_token').then((response) => { console.log(response.data); });


  return {
    props: {}
  }
}
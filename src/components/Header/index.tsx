import { Button, Flex, Icon, IconButton, useBreakpointValue, useColorMode } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { RiMenuLine, RiMoonLine, RiSunLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { api } from "../../services/api";
import ButtonLightOrDark from "../ButtonLightOrDark";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  const { onOpen } = useSidebarDrawer();

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

      <ButtonLightOrDark ml={3}/>

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
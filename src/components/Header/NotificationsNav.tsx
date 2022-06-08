import { HStack, Icon, useToast } from "@chakra-ui/react";
import { destroyCookie, parseCookies } from "nookies";
import { RiLogoutCircleLine, RiNotificationLine, RiUserAddLine } from "react-icons/ri";
import Router from 'next/router'

export function NotificationNav() {
  const toast = useToast();

  function handleLogoutUser() {
    destroyCookie(null, 'pontodesk.token')
    
    toast({
      title: 'Logout realizado com sucesso!',
      position: 'top-right',
      status: 'success',
      isClosable: true,
    })

    Router.push('/')
  }

  return (
    <HStack
      spacing={["6", "8"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiLogoutCircleLine} fontSize="24" title='Sair' cursor="pointer" onClick={handleLogoutUser} _hover={{color: "green.600"}} />
      <Icon as={RiUserAddLine} fontSize="22" />
      <Icon as={RiNotificationLine} fontSize="22" />
    </HStack>
  );
}

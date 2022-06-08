import { HStack, Icon, useColorModeValue, useToast } from "@chakra-ui/react";
import { destroyCookie, parseCookies } from "nookies";
import { RiLogoutCircleLine, RiNotificationLine, RiUserAddLine } from "react-icons/ri";
import Router from 'next/router'
import ButtonNav from "./ButtonNav";

export function NotificationNav() {
  const toast = useToast();
  const bg = useColorModeValue('gray.400', 'gray.500');
  const focus = useColorModeValue('green.200', 'green.500');

  function handleLogoutUser() {
    destroyCookie(null, 'pontodesk.token');

    toast({
      title: 'Logout realizado com sucesso!',
      position: 'top-right',
      status: 'success',
      isClosable: true,
    })

    Router.push('/');
  }

  return (
    <HStack
      spacing={["6", "8"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color={bg}
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <ButtonNav title="Sair" onclick={handleLogoutUser} icon={RiLogoutCircleLine} />
      <ButtonNav title="Adicionar usuário" onclick={handleLogoutUser} icon={RiUserAddLine} />
      <ButtonNav title="Notificações" onclick={handleLogoutUser} icon={RiNotificationLine} />
    </HStack>
  );
}

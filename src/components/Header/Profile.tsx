import { Avatar, Box, Button, Flex, IconButton, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { RiContactsLine, RiMenuLine } from "react-icons/ri";
import { AuthContext } from "../../contexts/AuthContext";
interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  const { user } = useContext(AuthContext)

  return (
    <Flex align="center">
      {
        showProfileData &&
        (
          <Box mr="4" textAlign="right">
            <Text>{user ? user.name : ''}</Text>
            <Text color="gray.300" fontSize="small">
              {user ? user.email : ''}
            </Text>
          </Box>
        )
      }
      <Avatar size="md" name={user ? user.name : ''} src=""></Avatar>
    </Flex>
  );
}

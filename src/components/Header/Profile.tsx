import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData}: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Allan Sartor</Text>
          <Text color="gray.300" fontSize="small">
            allansartor@outlook.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Allan Gustavo" src=""></Avatar>
    </Flex>
  );
}

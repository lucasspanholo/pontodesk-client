import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text 
      fontSize={["2xl", "3xl"]}
      fontWeight="bold" 
      letterSpacing="tight" 
      w="64"
    >
      Pontodesk
      <Text as="span" color="green.500">
        .
      </Text>
    </Text>
  );
}

import { Icon } from '@chakra-ui/react';
import React from 'react';

export default function ButtonNav({ title, onclick, icon }) {
  return (
    <Icon
      as={icon}
      fontSize="24"
      title={title}
      cursor="pointer"
      onClick={onclick}
      _hover={{ color: "green.500" }}
    />
  );
}

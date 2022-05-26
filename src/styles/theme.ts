import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

export const theme = extendTheme({
  config: {
    initialColorMode: 'gray',
    useSystemColorMode: false,
  },
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    },
    green: {
      "900": "#1C4532",
      "800": "#22543D",
      "700": "#276749",
      "600": "#2F855A",
      "500": "#38A169",
      "400": "#48BB78",
      "300": "#68D391",
      "200": "#9AE6B4",
      "100": "#C6F6D5",
      "50": "#F0FFF4",
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50'
      }
    }
  }
})
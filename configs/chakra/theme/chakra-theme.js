import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  fonts: {
    body: "'Courier Prime', monospace",
    heading: "'Courier Prime', monospace",
  },
});

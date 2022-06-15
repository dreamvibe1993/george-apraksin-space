/* eslint-disable react/prop-types */
import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";
import "@fontsource/courier-prime";

const theme = extendTheme({
  fonts: {
    body: "'Courier Prime', monospace",
    heading: "'Courier Prime', monospace",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

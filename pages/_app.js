/* eslint-disable react/prop-types */
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import "@fontsource/courier-prime";
import { theme as chakraTheme } from "../configs/chakra/theme/chakra-theme";

/*
TODO:
* Head for every page
*/

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

/* eslint-disable react/prop-types */
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AppDataContext } from "../utils/contexts/contexts";
import { apiAddress } from "../configs/api/config";
import "../styles/globals.css";
import "@fontsource/courier-prime";
import { theme as chakraTheme } from "../configs/chakra/theme/chakra-theme";

/*
TODO:
* Sorting skills
* Diploma for french or english?
* Flipping photo
* Sort and search 4 skills
* Status indicator of business
*/

function MyApp({ Component, pageProps }) {
  return (
    <AppDataContext.Provider
      value={{
        apiAddress,
      }}
    >
      <ChakraProvider theme={chakraTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AppDataContext.Provider>
  );
}

export default MyApp;

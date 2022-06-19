/* eslint-disable react/prop-types */
import React from "react";
import Router from "next/router";
import { ChakraProvider, Flex, Spinner } from "@chakra-ui/react";
import "../styles/globals.css";
import "@fontsource/courier-prime";
import { theme as chakraTheme } from "../configs/chakra/theme/chakra-theme";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  if (loading)
    return (
      <ChakraProvider theme={chakraTheme}>
        <Flex h="100vh" align={"center"} justify="center">
          <Spinner />
        </Flex>
      </ChakraProvider>
    );

  return (
    <ChakraProvider theme={chakraTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

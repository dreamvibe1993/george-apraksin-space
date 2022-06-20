import React from "react";
import { ChakraProvider, Flex, Heading, List } from "@chakra-ui/react";
import { theme as chakraTheme } from "../configs/chakra/theme/chakra-theme";
import Image from "next/image";
import { myContacts } from "../configs/personal/myContacts";
import { ListItemTruncated } from "../components/list-item-truncated/list-item-truncated";

function Error({ statusCode }) {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Flex
        as="main"
        p={10}
        fontSize={["inherit", 20]}
        h="100vh"
        justify={"center"}
        align="center"
        direction={"column"}
        maxW={500}
        margin="0 auto"
      >
        <Heading>
          {statusCode ? `${statusCode}!` : "An error occurred on client"}
        </Heading>
        <Image src="/images/error.gif" width={500} height={500} />
        <Heading textAlign="center">But contact me anyways...</Heading>
        <List w="100%">
          {myContacts.map((item) => {
            return <ListItemTruncated key={item.source} {...item} />;
          })}
        </List>
      </Flex>
    </ChakraProvider>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

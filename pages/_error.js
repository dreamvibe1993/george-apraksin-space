import React from "react";
import Link from "next/link";
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  List,
  Spinner,
} from "@chakra-ui/react";

import { theme as chakraTheme } from "../configs/chakra/theme/chakra-theme";
import { myContacts } from "../configs/personal/myContacts";
import { ListItemTruncated } from "../components/list-item-truncated/list-item-truncated";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";

function Error({ statusCode }) {
  const [isGifLoaded, setIfGifLoaded] = React.useState(false);

  return (
    <ChakraProvider theme={chakraTheme}>
      <Flex
        as="main"
        p={10}
        fontSize={["inherit", 20]}
        // h="100vh"    
        justify={"center"}
        align="center"
        direction={"column"}
        maxW={500}
        margin="0 auto"
      >
        <Heading>
          {statusCode ? `${statusCode}!` : "An error occurred on client"}
        </Heading>
        <Box position={"relative"} mt={5}>
          {!isGifLoaded && (
            <Flex
              position="absolute"
              w="100%"
              h="100%"
              justify="center"
              align="center"
            >
              <Spinner />
            </Flex>
          )}
          <Flex justify="center" align="center" shadow="base">
            <Image
              src="/images/error.gif"
              width={500}
              height={500}
              style={{
                opacity: isGifLoaded ? 1 : 0,
              }}
              onLoad={() => {
                setIfGifLoaded(true);
              }}
            />
          </Flex>
        </Box>
        <Heading pt={5} textAlign="center">
          But contact me anyways...
        </Heading>
        <List w="100%">
          {myContacts.map((item) => {
            return <ListItemTruncated key={item.source} {...item} />;
          })}
        </List>
        <Flex pt={5} justify="flex-start" w="100%">
          <Link href="/">
            <Button alignItems={"center"} display="flex" lineHeight="30px">
              <IoIosArrowBack />
              <div style={{ paddingTop: "2.5px" }}>&nbsp;Back to main</div>
            </Button>
          </Link>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

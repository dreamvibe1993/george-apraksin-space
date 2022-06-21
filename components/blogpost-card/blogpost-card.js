import React from "react";
import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";

import { CardWrapper } from "../../ui/card-wrapper/card-wrapper";

export default function BlogpostCard() {
  return (
    <VStack as="main" p={10} fontSize={["inherit", 20]}>
      <Flex justify="flex-start" w="100%" maxW={600} pb={5}>
        <Box
          alignItems={"center"}
          display="flex"
          as={Link}
          href="/blog"
          textDecoration={"none"}
        >
          <IoIosArrowBack />
        </Box>
      </Flex>
      <Box maxW={600}>
        <CardWrapper>
          <Heading textAlign={"center"}>Blog title</Heading>
          <Divider />
          <Flex direction={["column", "row"]}>
            <Flex flex={1} align="center" p={5}>
              <Grid
                templateColumns={"repeat(2, auto)"}
                templateRows={"repeat(2, auto)"}
              >
                <GridItem p={2}>
                  <Image src="../images/me.jpg" />
                </GridItem>
                <GridItem p={2}>
                  <Image src="../images/me.jpg" />
                </GridItem>
                <GridItem gridColumn={"1 / 3"} p={2}>
                  <Image src="../images/me-2.jpg" />
                </GridItem>
              </Grid>
            </Flex>
            <Flex direction={"column"} flex={1.5}>
              <Divider />
              <Text>
                Veniam cillum voluptate dolore pariatur. Duis adipisicing irure
                labore id duis fugiat cupidatat tempor mollit proident deserunt
                dolor Lorem. Do occaecat adipisicing Lorem voluptate veniam
                proident nostrud consectetur. Ex qui voluptate reprehenderit ea
                enim laborum cupidatat exercitation. Occaecat Lorem velit amet
                ut et esse tempor incididunt elit. Commodo id exercitation ipsum
                magna nisi irure pariatur amet eiusmod sunt est nulla mollit.
              </Text>
            </Flex>
          </Flex>
          <Divider />
          <Text textAlign={"right"}>{new Date().toDateString()}</Text>
          <Divider />
        </CardWrapper>
      </Box>
    </VStack>
  );
}

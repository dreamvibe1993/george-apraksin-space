import React from "react";
import { Box, Button, Divider, Flex, Link, VStack } from "@chakra-ui/react";

import { IoIosArrowBack } from "react-icons/io";

import BlogListCard from "../../components/bloglist-card/bloglist-card";

export default function Blog() {
  return (
    <VStack as="main" p={10} fontSize={["inherit", 20]}>
      <Flex justify="flex-start" w="100%" maxW={600} pb={5}>
        <Box
          alignItems={"center"}
          display="flex"
          lineHeight="30px"
          as={Link}
          href="/"
          textDecoration={"none"}
        >
          <IoIosArrowBack />
        </Box>
      </Flex>
      <BlogListCard />
      <BlogListCard />
    </VStack>
  );
}

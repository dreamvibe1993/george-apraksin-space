import React from "react";
import { Badge, Box, Flex, Heading, Text } from "@chakra-ui/react";

import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

export default function BlogListCard() {
  return (
    <Box
      w="100%"
      maxW={600}
      transition="all .2s ease"
      shadow={"lg"}
      p={5}
      mb={5}
      _hover={{
        shadow: "md",
      }}
      border={1}
      borderColor="gray.200"
      borderStyle={"solid"}
    >
      <Heading >Blog Title</Heading>
      <Text>Minim reprehenderit ut ea laborum ut quis est.</Text>
      <Flex mt={2}>
        <Badge pt={1} mr={1} colorScheme="green">Thoughts</Badge>
        <Badge pt={1} mr={1} colorScheme="blue">Sad</Badge>
        <Badge pt={1} mr={1} colorScheme="red">Tech</Badge>
      </Flex>
      <Box cursor={"pointer"} mt={2}>
        <Link href="blog/4-12-23">
          <Flex justify={"flex-end"} align="center">
            <div style={{ paddingTop: "2.5px" }}>Read it&nbsp;</div>
            <IoIosArrowForward />
          </Flex>
        </Link>
      </Box>
    </Box>
  );
}

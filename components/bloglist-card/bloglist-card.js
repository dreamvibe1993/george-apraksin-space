import React from "react";
import { Badge, Box, Flex, Heading, Text } from "@chakra-ui/react";

import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

export default function BlogListCard({
  title,
  post,
  badges,
  id
}) {
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
      <Heading>{title}</Heading>
      <Text>{post.slice(0, 40)}...</Text>
      {Array.isArray(badges) && badges.length > 0 && (
        <Flex mt={2}>
          {badges.map((badge) => (
            <Badge
              pt={1}
              mr={1}
              colorScheme={badge.color}
              key={`${badge.title}${badge.color}`}
            >
              {badge.title}
            </Badge>
          ))}
        </Flex>
      )}
      <Box cursor={"pointer"} mt={2}>
        <Link href={`blog/${id}`}>
          <Flex justify={"flex-end"} align="center">
            <div style={{ paddingTop: "2.5px" }}>Read it&nbsp;</div>
            <IoIosArrowForward />
          </Flex>
        </Link>
      </Box>
    </Box>
  );
}

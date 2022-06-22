import React from "react";
import Link from "next/link";
import { Box, Flex, Spinner, VStack } from "@chakra-ui/react";

import { IoIosArrowBack } from "react-icons/io";

import BlogpostCard from "../../components/blogpost-card/blogpost-card";
import { useLoadBlog } from "../../services/hooks/useLoadBlog/useLoadBlog";
import { ErrorProcessingRequest } from "../../components/errors/error-processing-request/error-processing-request";
import { useRouter } from "next/router";
import Error from "../_error";

const LinkBack = () => (
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
);

export default function BlogByDate() {
  const router = useRouter();
  const {
    data: blog,
    isLoading,
    isError,
  } = useLoadBlog({ id: router.query.blogId });

  if (isLoading) {
    return (
      <VStack as="main" p={10} fontSize={["inherit", 20]}>
        <LinkBack />
        <Flex justify={"center"} maxW={600} w="100%">
          <Spinner />
        </Flex>
      </VStack>
    );
  }

  if (!blog) return <Error statusCode={404} />;

  if (isError) {
    return (
      <VStack as="main" p={10} fontSize={["inherit", 20]}>
        <LinkBack />
        <Flex justify={"center"} maxW={600} w="100%">
          <ErrorProcessingRequest />
        </Flex>
      </VStack>
    );
  }

  return <BlogpostCard {...blog} />;
}

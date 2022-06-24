import React from "react";
import { Box, Flex, Link, Spinner, Text, VStack } from "@chakra-ui/react";

import { IoIosArrowBack } from "react-icons/io";

import BlogListCard from "../../components/bloglist-card/bloglist-card";
import { useLoadBlogs } from "../../services/hooks/useLoadBlogs/useLoadBlogs";
import { ErrorProcessingRequest } from "../../components/errors/error-processing-request/error-processing-request";
import { HeadComponent } from "../../components/head/head";

const LinkBack = () => (
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
);

export default function BlogWithHead() {
  const title = "George's blog";
  const desc = "A Frontend-dev called George's blog";
  const imageSrc = "../images/me-2.jpg";
  return (
    <>
      <HeadComponent
        title={title}
        ogTitle={title}
        desc={desc}
        ogDesc={desc}
        ogImage={imageSrc}
      />
      <Blog />
    </>
  );
}

function Blog() {
  const { data: blogs, isLoading, isError } = useLoadBlogs();

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

  if (!blogs || blogs.length < 1) {
    return (
      <VStack as="main" p={10} fontSize={["inherit", 20]}>
        <LinkBack />
        <Box maxW={600} w="100%">
          <Text>
            Sorry but seems there is no blogs yet! 😢 <br /> Come here later!
          </Text>
        </Box>
      </VStack>
    );
  }

  return (
    <VStack as="main" p={10} fontSize={["inherit", 20]}>
      <LinkBack />
      {blogs
        .sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        })
        .map((blog) => (
          <BlogListCard key={blog.createdAt} {...blog} />
        ))}
    </VStack>
  );
}

// import { apiAddress } from "../../configs/api/config";
// import { blogsMapper } from "../../utils/mappers/blogsMapper";
/* When I have some more money to pay for a not sleeping dyno.
export async function getStaticProps() {
  try {
    const blogs = await fetch(apiAddress + "/blogs").then((res) => res.json());
    return {
      props: {
        blogs: blogsMapper(blogs),
        blogsRaw: blogs,
      },
      revalidate: 600,
    };
  } catch (e) {
    console.error("🆘ERROR: ", e);
    return {
      props: {
        blogs: [],
      },
      revalidate: 600,
    };
  }
}
*/

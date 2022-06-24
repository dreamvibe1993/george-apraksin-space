import React from "react";
import {
  Box,
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

export default function BlogpostCard({ title, post, createdAt, images }) {
  return (
    <VStack as="main" p={10} fontSize={["inherit", 20]}>
      <Flex justify="flex-start" w="100%" maxW={1200} pb={5}>
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
      <Box maxW={1200}>
        <CardWrapper>
          <Heading textAlign={"center"}>{title}</Heading>
          <Divider />
          <Flex direction={["column", "row"]}>
            {images && Array.isArray(images) && images.length > 0 && (
              <Flex flex={1} align="center" p={5}>
                <Grid
                  templateColumns={"repeat(2, auto)"}
                  templateRows={"repeat(2, auto)"}
                >
                  {images.map((img, i) => (
                    <GridItem p={2} key={img.src + i}>
                      <Image src={img.src.match(/\bhttp.*/gi) ? img.src : `../${img.src}`} />
                    </GridItem>
                  ))}
                </Grid>
              </Flex>
            )}
            <Flex direction={"column"} flex={1.5} py={5}>
              <Text>{post}</Text>
            </Flex>
          </Flex>
          <Divider />
          <Text textAlign={"right"}>{new Date(createdAt).toDateString()}</Text>
        </CardWrapper>
      </Box>
    </VStack>
  );
}

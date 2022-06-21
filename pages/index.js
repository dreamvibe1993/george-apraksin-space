import React from "react";
import {
  Image,
  VStack,
  Box,
  Flex,
  Heading,
  List,
  Divider,
} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

import { SkillBlock } from "../components/skills-block/skills-block";
import { ListItemTruncated } from "../components/list-item-truncated/list-item-truncated";
import { StatusBar } from "../components/status-bar/status-bar";
import { HeadComponent } from "../components/head/head";
import { myContacts } from "../configs/personal/myContacts";

export default function Home() {
  return (
    <>
      <HeadComponent />
      <VStack as="main" p={10} fontSize={["inherit", 20]}>
        <Heading>George.</Heading>
        <Flex
          align="center"
          justify="space-between"
          cursor="pointer"
          w="100%"
          maxW={500}
        >
          <Flex justify={["center", "center"]}>

          <StatusBar />
          </Flex>
          <Link href="/blog" textDecoration={"none"}>
            <Flex align={"center"}>
              <div>Blog&nbsp;</div>
              <IoIosArrowForward />
            </Flex>
          </Link>
        </Flex>
        <Flex direction="column" align={"center"} maxW="600px">
          <Box
            mb={5}
            maxW={"500px"}
            border={1}
            borderColor="gray.200"
            borderStyle="solid"
          >
            <Image src={"/images/me.jpg"} alt="Me. George." shadow={"base"} />
          </Box>
          <SkillBlock />
        </Flex>
        <Heading mt={10}>Contact me.</Heading>
        <List w="100%" maxW="600px">
          {myContacts.map((item) => {
            return <ListItemTruncated key={item.source} {...item} />;
          })}
        </List>
      </VStack>
    </>
  );
}

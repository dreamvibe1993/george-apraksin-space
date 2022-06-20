import React from "react";
import { Image, VStack, Box, Flex, Heading, List } from "@chakra-ui/react";

import { SkillBlock } from "../components/skills-block/skills-block";
import { ListItemTruncated } from "../components/list-item-truncated/list-item-truncated";
import { StatusBar } from "../components/status-bar/status-bar";
import { HeadComponent } from "../components/head/head";
import { myContacts } from "../configs/personal/myContacts";

export default function Home() {
  return (
    <>
      <HeadComponent />
      <VStack as="main" pb={10} px={10} fontSize={["inherit", 20]}>
        <Heading mt={10}>George.</Heading>
        <StatusBar />
        <Flex direction="column" align={"center"} maxW="600px">
          <Box maxW={"500px"}>
            <Image
              src={"/images/me.jpg"}
              alt="Me. George."
              shadow={"base"}
              mb={5}
            />
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

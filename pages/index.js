import React from "react";
import { Image, VStack, Box, Flex, Heading, List } from "@chakra-ui/react";

import Head from "next/head";

import { SkillBlock } from "../components/skills-block/skills-block";
import { ListItemTruncated } from "../components/list-item-truncated/list-item-truncated";
import { StatusBar } from "../components/status-bar/status-bar";
import { HeadComponent } from "../components/head/head";

export async function getServerSideProps() {
  const personal = {
    // eslint-disable-next-line no-undef
    myTG: process.env.MY_TG,
    // eslint-disable-next-line no-undef
    myPhone: process.env.MY_PHONE,
  };
  return { props: { personal } };
}

export default function Home(props) {
  const { personal } = props;

  const myContacts = [
    // eslint-disable-next-line no-undef
    { source: "telegram", contact: personal.myTG },
    // eslint-disable-next-line no-undef
    { source: "phone", contact: `tel:${personal.myPhone}` },
  ];

  return (
    <>
      <HeadComponent />
      <VStack as="main" pb={10} px={10} fontSize={["inherit", 20]}>
        <Heading mt={10}>George.</Heading>
        <StatusBar />
        <Flex direction="column" align={"center"} maxW="600px">
          <Box maxW={"500px"}>
            <Image
              src={personal?.myPictureSrc || "/images/me.jpg"}
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

import React from "react";
import { Image, VStack, Box, Flex, Heading, List } from "@chakra-ui/react";

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
    // eslint-disable-next-line no-undef
    myEmail: process.env.MY_EMAIL,
  };
  return { props: { personal } };
}

export default function Home(props) {
  const { personal } = props;

  const myContacts = [
    { source: "telegram", contact: personal.myTG, href: personal.myTG },
    {
      source: "phone",
      contact: personal.myPhone,
      href: `tel:${personal.myPhone}`,
    },
    {
      source: "email",
      contact: personal.myEmail,
      href: `mailto:${personal.myEmail}`,
    },
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

import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { HeadComponent } from "../components/head/head";
import { apiAddress } from "../configs/api/config";
import { capitalize } from "../utils/text/capitalize";

export async function getServerSideProps(context) {
  console.log(`Received context: ${context?.params?.skill}`);
  const heading = context?.params?.skill
    ? capitalize(context.params.skill).replace("_", " ")
    : "";
  try {
    console.log(`Making request by: ${apiAddress}/projects`);
    const res = await axios.get(`${apiAddress.replace(" ", "")}/projects`);
    const projects = res.data.data.map((proj) => ({
      ...proj.attributes.data,
    }));
    console.log(`Got response: ${projects}`);
    const projectsNeededForThisPage = projects.filter((proj) =>
      proj.keywords.includes(context.params.skill)
    );
    return {
      props: {
        projects: projectsNeededForThisPage,
        heading,
      },
    };
  } catch (e) {
    console.log("ERROR 🆘: ", e.message);
    return {
      props: {
        projects: [],
        heading,
      },
    };
  }
}

export function SkillPage(props) {
  const { projects, heading } = props;

  if (!projects.length) {
    return (
      <>
        <HeadComponent title="There is nothing..." />
        <VStack as="main" p={[5, 10]} fontSize={["inherit", 20]} maxW="600px">
          <Flex
            direction="column"
            shadow="base"
            p={5}
            justify="center"
            w="100%"
            border={"1px"}
            borderColor="gray.200"
          >
            <Heading textAlign={"center"}>There is nothing 😢...</Heading>
            <Text>
              Either there is no projects I made with {heading.toLowerCase()} or
              it is impossible to render them like this.
            </Text>
          </Flex>
          <LinkBack url="/" />
        </VStack>
      </>
    );
  }

  return (
    <>
      <HeadComponent title={`George's ${heading} projects`} />
      <VStack as="main" p={[5, 10]} fontSize={["inherit", 20]} maxW="600px">
        <Heading textAlign={"center"}>My {heading} projects</Heading>
        {projects.map((proj) => {
          return (
            <Flex
              key={proj.id}
              direction="column"
              shadow="base"
              p={5}
              justify="center"
              w="100%"
              border={"1px"}
              borderColor="gray.200"
            >
              <Flex borderBottom={"1px"} borderColor="gray.200">
                <Box w={["40%", "20%"]} noOfLines={1} fontWeight={"bold"}>
                  <Text>Title</Text>
                </Box>
                <Box flex={1}>
                  <Text noOfLines={1} alt={proj.name}>
                    {proj.name}
                  </Text>
                </Box>
              </Flex>
              {proj.gitUrls.length > 0 && (
                <URLRow
                  title={`Git Repo${proj.gitUrls.length > 1 ? "s" : ""}`}
                  urlsArray={proj.gitUrls}
                />
              )}
              {proj.deployedUrls.length > 0 && (
                <URLRow
                  title={`Link${proj.deployedUrls.length > 1 ? "s" : ""}`}
                  urlsArray={proj.deployedUrls}
                />
              )}
              <Flex borderBottom={"1px"} borderColor="gray.200">
                <Flex
                  align="center"
                  w={["40%", "20%"]}
                  noOfLines={1}
                  fontWeight={"bold"}
                  my={1}
                >
                  <Text>Stack</Text>
                </Flex>
                <Flex flex={1} flexWrap="wrap" w={["60%", "80%"]}>
                  {proj.keywords.map((keyword, index) => (
                    <Text key={keyword} noOfLines={1}>
                      {keyword}
                      {index === proj.keywords.length - 1 ? "" : `,`}&nbsp;
                    </Text>
                  ))}
                </Flex>
              </Flex>
            </Flex>
          );
        })}
        <Flex justify={"flex-start"} w="100%">
          <LinkBack url="/" />
        </Flex>
      </VStack>
    </>
  );
}

const LinkBack = ({ url }) => (
  <Button>
    <Link href={url}>Back</Link>
  </Button>
);

const URLRow = ({ title, urlsArray }) => (
  <Flex justify={"space-between"} borderBottom={"1px"} borderColor="gray.200">
    <Box w={["38%", "18%"]}>
      <Text noOfLines={1} fontWeight={"bold"}>
        {title}
      </Text>
    </Box>
    <Flex direction="column" w={["60%", "80%"]}>
      {urlsArray.map((url) => (
        <Text as="a" href={url} key={url} noOfLines={1}>
          {url}
        </Text>
      ))}
    </Flex>
  </Flex>
);

export default SkillPage;

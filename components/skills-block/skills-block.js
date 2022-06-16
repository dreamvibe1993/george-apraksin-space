import React from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useLoadSkills } from "../../services/hooks/useLoadSkills/useLoadSkills";
import Link from "next/link";

export function SkillBlock() {
  const { isLoading, isError, data: skills } = useLoadSkills();

  if (isError)
    return (
      <Alert status="error" display="flex" alignItems={"center"}>
        <AlertIcon />
        <AlertDescription lineHeight={"unset"}>
          There was an error processing your request.
        </AlertDescription>
      </Alert>
    );
  if (isLoading)
    return (
      <Flex justify={"center"} mb={5}>
        <Spinner />
      </Flex>
    );

  return (
    <>
      <Flex wrap="wrap" justify={"space-around"} mb={5}>
        {skills.map((skill) => (
          <Box
            key={skill.name}
            bgColor={
              skill.level >= 5
                ? `blue.${Math.round(skill.level / 2.8)}00`
                : `red.${4 - Math.round(skill.level / 2)}00`
            }
            borderRadius="30px"
            p={3}
            m={1}
          >
            <Link href={"/" + skill.id.toLowerCase()}>{skill.name}</Link>
          </Box>
        ))}
      </Flex>
      <Box
        w="100%"
        h="20px"
        bgGradient="linear(to-r, blue.500, white, red.500)"
      />
      <Flex justify={"space-between"} w="100%">
        <Text>Pro</Text>
        <Text>Noob</Text>
      </Flex>
    </>
  );
}

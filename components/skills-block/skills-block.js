import React from "react";
import {
  Box,
  Flex,
  Select,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useLoadSkills } from "../../services/hooks/useLoadSkills/useLoadSkills";
import Link from "next/link";
import { ErrorProcessingRequest } from "../errors/error-processing-request/error-processing-request";

export function SkillBlock() {
  const { isLoading, isError, data } = useLoadSkills();
  const [skills, setSkills] = React.useState([]);

  React.useEffect(() => {
    if (data && skills.length < 1) setSkills(data);
  }, [data]);

  const sortByLeastSkilled = () => {
    setSkills((prev) => [...prev].sort((a, b) => a.level - b.level));
  };

  const sortByMostSkilled = () => {
    setSkills((prev) => [...prev].sort((b, a) => a.level - b.level));
  };

  const sortSkills = (e) => {
    if (e.target.value === "byMost") sortByMostSkilled();
    if (e.target.value === "byLeast") sortByLeastSkilled();
  };

  if (isError) {
    return <ErrorProcessingRequest />;
  }

  if (isLoading) {
    return (
      <Flex justify={"center"} mb={5}>
        <Spinner />
      </Flex>
    );
  }

  return (
    <>
      <Select placeholder="Sort skills by" mb={5} onChange={sortSkills}>
        <option value="byMost">Most skilled</option>
        <option value="byLeast">Least skilled</option>
      </Select>
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

import React from "react";
import {
  Box,
  Flex,
  Select,
  Spinner,
  Text,
  Tooltip,
  useDisclosure,
  WrapItem,
} from "@chakra-ui/react";
import { useLoadSkills } from "../../services/hooks/useLoadSkills/useLoadSkills";
import Link from "next/link";
import { ErrorProcessingRequest } from "../errors/error-processing-request/error-processing-request";

export function SkillBlock() {
  const { isLoading, isError, data } = useLoadSkills();
  const {
    onOpen: openToolTip,
    onClose: closeToolTip,
    isOpen: isToolTipOpen,
  } = useDisclosure();
  const [skills, setSkills] = React.useState([]);

  const timeoutId = React.useRef();

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

  React.useEffect(() => {
    const codePhrase = "is_visiting_george_first_time";
    const isUserFirstTime = !localStorage.getItem(codePhrase);
    if (isUserFirstTime) {
      openToolTip();
      timeoutId.current = setTimeout(() => {
        closeToolTip();
        localStorage.setItem(codePhrase, false);
        clearTimeout(timeoutId.current);
      }, 5000);
    }
    return () => {
      clearTimeout(timeoutId.current);
    };
  }, []);

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
      <WrapItem>
        <Tooltip
          label="Press us to see projects!"
          placement="bottom"
          isOpen={isToolTipOpen}
          hasArrow
          bg="red.600"
        >
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
        </Tooltip>
      </WrapItem>
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

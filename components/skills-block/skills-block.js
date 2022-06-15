import React from "react";
import { Flex, Link } from "@chakra-ui/react";

export function SkillBlock({ skills }) {
  return (
    <Flex wrap="wrap" justify={"space-around"} mb={5}>
      {skills.map((skill) => (
        <Link
          href={"/" + skill.name.toLowerCase()}
          key={skill.name}
          bgColor={
            skill.level >= 5
              ? `blue.${Math.round(skill.level / 2)}00`
              : `red.${4 - Math.round(skill.level / 2)}00`
          }
          borderRadius="30px"
          p={3}
          m={1}
        >
          {skill.name}
        </Link>
      ))}
    </Flex>
  );
}

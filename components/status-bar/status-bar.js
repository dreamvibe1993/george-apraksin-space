import React from "react";
import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { useLoadStatus } from "../../services/hooks/useLoadStatus/useLoadStatus";

export const StatusBar = () => {
  const { isLoading, isError, data } = useLoadStatus();
  const businessLevels = ["green.300", "orange.300", "red.500"];

  if (isError) return null;

  if (isLoading) {
    return (
      <Flex align={"center"} w="100%" maxW="500px" p={3}>
        <Spinner w={2} h={2} />
      </Flex>
    );
  }

  return (
    <Flex align={"center"} w="100%" maxW="500px">
      <Flex p={3}>
        <Box
          bg={businessLevels[data.level - 1]}
          borderRadius="100%"
          w={2}
          h={2}
        >
          &nbsp;
        </Box>
      </Flex>
      <Flex flex={1} justify="flex-start" fontSize={"sm"} pt={1.4} lineHeight={"sm"}>
        <Text noOfLines={1} display={["none", "initial"]}>

        {data.status}
        </Text>
      </Flex>
    </Flex>
  );
};

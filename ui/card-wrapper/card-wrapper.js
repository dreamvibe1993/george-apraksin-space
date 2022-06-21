import React from "react";
import { Box } from "@chakra-ui/react";

export const CardWrapper = ({ children }) => {
  return (
    <Box shadow={"base"} border={1} borderColor={"gray.200"} p={5} w="100%">
      {children}
    </Box>
  );
};

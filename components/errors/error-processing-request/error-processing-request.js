import React from "react";
import { Alert, AlertDescription, AlertIcon } from "@chakra-ui/react";

export const ErrorProcessingRequest = () => (
  <Alert status="error" display="flex" alignItems={"center"}>
    <AlertIcon />
    <AlertDescription lineHeight={"unset"}>
      There was an error processing your request.
    </AlertDescription>
  </Alert>
);

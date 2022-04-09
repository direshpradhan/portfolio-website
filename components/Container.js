import { Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "./Navbar";

const Container = ({ children }) => {
  return (
    <>
      <Navbar />
      <Stack
        as="main"
        spacing="8"
        justifyContent="center"
        alignItems="flext-start"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {children}
        </Flex>
      </Stack>
    </>
  );
};

export default Container;

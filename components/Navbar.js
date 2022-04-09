import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import React from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";

export const Navbar = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const navHoverBg = {
    light: "gray.100",
    dark: "gray.700",
  };
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      as="nav"
      px="16"
      py="4"
      mb="4"
    >
      {/* <Link href="/"> */}
      <Heading as="h3" size="lg">
        &#60;Diresh /&#62;{" "}
      </Heading>
      {/* </Link> */}
      <Box>
        <NextLink href="/" passHref>
          <Button
            as="a"
            variant="ghost"
            p={[1, 2, 4]}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
            backgroundColor={
              router.pathname === "/" ? navHoverBg[colorMode] : null
            }
            aria-label="Home"
            mr="2"
          >
            Home
          </Button>
        </NextLink>
        <NextLink href="/projects" passHref>
          <Button
            as="a"
            variant="ghost"
            p={[1, 2, 4]}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
            backgroundColor={
              router.pathname.includes("/projects")
                ? navHoverBg[colorMode]
                : null
            }
            aria-label="Projects"
            mr="2"
          >
            Projects
          </Button>
        </NextLink>
        <NextLink href="/blogs" passHref>
          <Button
            as="a"
            variant="ghost"
            p={[1, 2, 4]}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
            backgroundColor={
              router.pathname.includes("/blogs") ? navHoverBg[colorMode] : null
            }
            aria-label="Blogs"
            mr="2"
          >
            Blogs
          </Button>
        </NextLink>
        <DarkModeSwitch />
      </Box>
    </Flex>
  );
};

import { Box, Button, Flex, useColorMode } from "@chakra-ui/react";
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
      width="100%"
      as="nav"
      px="16"
      py="4"
    >
      <DarkModeSwitch />
      <Box>
        <NextLink href="/" passHref>
          <Button
            as="a"
            variant="ghost"
            p={[1, 2, 4]}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
            backgroundColor={
              router.pathname.includes("/") ? navHoverBg[colorMode] : null
            }
            aria-label="Home"
          >
            Home
          </Button>
        </NextLink>
        <NextLink href="/about" passHref>
          <Button
            as="a"
            variant="ghost"
            p={[1, 2, 4]}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
            backgroundColor={
              router.pathname.includes("/about") ? navHoverBg[colorMode] : null
            }
            aria-label="About"
          >
            About
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
          >
            Blogs
          </Button>
        </NextLink>
      </Box>
    </Flex>
  );
};

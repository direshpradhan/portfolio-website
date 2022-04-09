import Head from "next/head";
import Container from "../components/Container";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Container>
        <Head>
          <title>Portfolio</title>
          <meta name="description" content="Diresh's Protfolio" />
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
        <Heading as="h2" size="lg" mb="6">
          About
        </Heading>
        <Flex
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mx="auto"
          width="65%"
          border="1px"
          borderColor="gray.700"
          p="4"
          borderRadius="10"
        >
          <Image
            borderRadius="full"
            boxSize="300px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            mr="6"
          />
          <Box>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Box>
        </Flex>
      </Container>
    </>
  );
}

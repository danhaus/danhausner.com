import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Heading, Text } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Box bg="rgba(247, 235, 212, 1)" h="100vh" >
      <Head>
        <title>I{"'"}m Daniel Hausner</title>
        <meta name="description" content="I'm Daniel Hausner, fullstack web developer." />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>

      <Box py={20}>
        <Heading fontSize="6xl" lineHeight="9">Daniel</Heading>
        <Heading fontSize="2.35rem">HAUSNER</Heading>
        <Heading as={'h1'} fontWeight="medium" fontSize="xl">I bring ideas to live with web technologies.</Heading>
      </Box>

      <footer>Placeholder for footer.</footer>
    </Box>
  );
};

export default Home;

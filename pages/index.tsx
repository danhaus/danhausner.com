import type { NextPage } from 'next';
import Head from 'next/head';
import {Box, Text} from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Box bg='#F7EBD4' h='100vh'>
      <Head>
        <title>I{'\''}m Daniel Hausner</title>
        <meta name="description" content="I'm Daniel Hausner, fullstack web developer." />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
      <Text>Hello</Text>
      <footer>Placeholder for footer.</footer>
    </Box>
  );
};

export default Home;

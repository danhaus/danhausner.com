import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { getHomeData } from '../lib/datocms';
import { ResponsiveImageType } from 'react-datocms';
import Hero from '../components/Hero';

export const getStaticProps: GetStaticProps = async () => {
  const homeData = await getHomeData();
  return {
    props: { homeData },
  };
};

interface HomeProps {
  homeData: {
    profilePicture: {
      responsiveImage: ResponsiveImageType;
    };
  };
}

const Home: NextPage<HomeProps> = ({ homeData }) => {
  // console.log(JSON.stringify(home));
  const { profilePicture } = homeData;
  return (
    <Box bg="rgba(247, 235, 212, 1)">
      <Head>
        <title>I{"'"}m Daniel Hausner</title>
        <meta name="description" content="I'm Daniel Hausner, fullstack web developer." />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>

      <Hero profilePicture={profilePicture} />

      <footer>Placeholder for footer.</footer>
    </Box>
  );
};

export default Home;

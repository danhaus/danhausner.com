import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Box, Heading, Text } from '@chakra-ui/react';
import { request } from '../lib/datocms';
import { Image, ResponsiveImageType } from 'react-datocms';

const HOMEPAGE_QUERY = `query HomePage {
  home {
    profilePicture {
      responsiveImage(imgixParams: { fit: crop, w: 100, h: 100, auto: format }) {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        base64
      }
    }
  }
}`;

export const getStaticProps: GetStaticProps = async () => {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  const homeData = data?.home;
  return {
    props: { homeData },
  };
};

interface HomeProps {
  homeData: {
    profilePicture: {
      responsiveImage: ResponsiveImageType;
    };
  }
}

const Home: NextPage<HomeProps> = ({ homeData }) => {
  // console.log(JSON.stringify(home));
  const {profilePicture} = homeData;
  return (
    <Box bg="rgba(247, 235, 212, 1)" h="100vh">
      <Head>
        <title>I{"'"}m Daniel Hausner</title>
        <meta name="description" content="I'm Daniel Hausner, fullstack web developer." />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>

      <Box py={20}>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image data={profilePicture.responsiveImage} /> {/* alt provided in data */}
        <Heading fontSize="6xl" lineHeight="9">
          Daniel
        </Heading>
        <Heading fontSize="2.35rem">HAUSNER</Heading>
        <Heading as={'h1'} fontWeight="medium" fontSize="xl">
          I bring ideas to live with web technologies.
        </Heading>
      </Box>

      <footer>Placeholder for footer.</footer>
    </Box>
  );
};

export default Home;

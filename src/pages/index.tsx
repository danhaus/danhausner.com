import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Text } from '@chakra-ui/react';
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
    <>
      <Head>
        <title>I{"'"}m Daniel Hausner</title>
        <meta name="description" content="I'm Daniel Hausner, fullstack web developer." />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>

      <Hero profilePicture={profilePicture} />

      <Text>Hello world! Full-stack web developer here!</Text>
      <br />
      <Text>
        I enjoy spending my mornings with challenging work on the backend, and afternoons with visually-pleasing
        frontend.
      </Text>
      <br />
      <Text>
        <em>I don&apos;t drink coffee — I&apos;m powered by passion.</em>
      </Text>
      <br />
      <Text>
        I&apos;m a digital nomad. In my downtime, I thrive on being outdoors — I especially like mountaineering, hiking,
        and climbing. I also do calisthenics and run regularly — currently training for a marathon.
      </Text>
      <br />
    </>
  );
};

export default Home;

import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Box, Text } from '@chakra-ui/react';
import { getHomeData } from '../lib/datocms';
import { ResponsiveImageType } from 'react-datocms';
import Hero from '../components/Hero';
import Section from '../components/Section';
import { NavigationIds, SectionIds } from '../navigation/constants';

const SECTION_SPACING = 16;

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
    <Box fontSize="lg">
      <Head>
        <title>I{"'"}m Daniel Hausner</title>
        <meta name="description" content="I'm Daniel Hausner, fullstack web developer." />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>

      <Hero id={SectionIds.HOME} anchorId={NavigationIds.HOME} profilePicture={profilePicture} />

      <Section id={SectionIds.INTRO} anchorId={NavigationIds.INTRO}>
        <Text>Hello world! Full-stack web developer here with demonstrable phobia of spaghetti code.</Text>
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
          I&apos;m a digital nomad. In my downtime, I thrive on being outdoors — I especially like mountaineering,
          hiking, and climbing. I also do calisthenics and run regularly — recently ran my first trail marathon.
        </Text>
      </Section>

      <Section id={SectionIds.HOW_I_WORK} anchorId={NavigationIds.HOW_I_WORK} heading="How I work" mt={SECTION_SPACING}>
        <Text>My work life is guided by efficiency, balance, and excellence.</Text>
        <br />
        <Text>
          I don&apos;t believe in a traditional 9–5, but I believe in working in a state of high productivity and in
          resting/exercising when need to recharge; in other words, getting things done efficiently whilst having a
          balanced life. I also strive for excellence, but not by default — considering the cost of excellence is
          important. Building a great product for half the price may be much better ROI than spending the double on
          marginal improvements that make barely any difference to the end user.
        </Text>
        <br />
        <Text>My preferred tech stack is React, Next.js, Prisma, and TypeScript.</Text>
      </Section>

      <Section
        id={SectionIds.RANDOM_FACTS_ABOUT_ME}
        anchorId={NavigationIds.RANDOM_FACTS_ABOUT_ME}
        heading="Random facts about me"
        mt={SECTION_SPACING}
      >
        <Text>⛵️&nbsp;&nbsp;Won the World Robotic Sailing Championship</Text>
        <br />
        <Text>
          👨‍💻&nbsp;&nbsp;Graduated from <em>Imperial&nbsp;College&nbsp;London</em> with Distinction in{' '}
          <em>Computing Science MSc</em> while managed to complete the Kickstart&nbsp;London startup accelerator
          programme
        </Text>
        <br />
        <Text>🚴‍♂️&nbsp;&nbsp;Did competitive cycling for most of my secondary school</Text>
        <br />
      </Section>
    </Box>
  );
};

export default Home;

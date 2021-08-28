import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { getHomeData } from '../lib/datocms';
import { ResponsiveImageType } from 'react-datocms';
import Hero from '../components/Hero';
import Section from '../components/Section';

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

      <Section>
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
          I&apos;m a digital nomad. In my downtime, I thrive on being outdoors — I especially like mountaineering,
          hiking, and climbing. I also do calisthenics and run regularly — currently training for a marathon.
        </Text>
      </Section>

      <Section heading="How I work" mt={8}>
        <Text>My work life is guided by efficiency, balance, and excellence.</Text>
        <br />
        <Text>
          I don&apos;t believe in 9–5, but I believe in working in a state of high productivity and resting/exercising
          when the productivity is low; in other words, getting things done efficiently whilst having a balanced life. I
          also strive for excellence, but not by default — considering the cost of excellence is important. Building a
          great product for half the price may be much better ROI than spending the double on marginal improvements that
          make barely any difference to the end user.
        </Text>
        <br />
        <Text>My preferred tech stack is React, Prisma, and TypeScript.</Text>
      </Section>

      <Section heading="Random facts about me" mt={8}>
        <Text>⛵️ Won the World Robotic Sailing Championship</Text>
        <br />
        <Text>👨‍💻 Have two technical degrees</Text>
        <UnorderedList listStylePos="inside">
          <ListItem>
            Computing Science MSc from <em>Imperial&nbsp;College&nbsp;London</em> (Distinction)
          </ListItem>
          <ListItem>
            Mechanical Engineering BEng from <em>University&nbsp;of&nbsp;Southampton</em> (First Class)
          </ListItem>
        </UnorderedList>
        <br />
        <Text>🚴‍♂️ Did competitive cycling for most of my secondary schoo</Text>
        <br />
      </Section>
    </>
  );
};

export default Home;

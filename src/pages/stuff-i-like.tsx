import { NextPage } from 'next';
import { Box, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Section from '../stuff-i-like/components/Section';
import { NAV_BAR_HEIGHT } from '../navigation/constants';

const StuffILike: NextPage = () => {
  return (
    <Box fontSize={'lg'} pt={`${NAV_BAR_HEIGHT}px`}>
      <Head>
        <title>Stuff I like — Daniel Hausner</title>
        <meta
          name="description"
          content="Section about products, tools, and books that I like in the area of software, health, digital, and related."
        />
      </Head>

      <Heading as="h1" size={'2xl'} mt={10}>
        Stuff I like
      </Heading>

      <Section
        heading="Software development"
        items={['Next.js', 'Prisma', 'React', 'Chakra UI', 'Vercel', 'TypeScript']}
      />

      <Section heading="Health & nutrition products" items={['Heights', 'Huel', 'Greens powder']} />

      <Section heading="Digital producs" items={['Loom']} />

      <Section
        heading="Books"
        items={[
          <Text key="sapiens">
            <em>Sapeins</em> by Yuval Noah Harari
          </Text>,
          <Text key="sapiens">
            <em>Factfulness</em> by Hans Rosling
          </Text>,
          <Text key="sapiens">
            <em>The Lean Startup</em> by Eric Ries
          </Text>,
        ]}
      />
    </Box>
  );
};

// const Section

export default StuffILike;

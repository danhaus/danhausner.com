import { NextPage } from 'next';
import { Box, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import Section from '../stuff-i-like/components/Section';
import { NAV_BAR_HEIGHT } from '../navigation/constants';
import { ExternalLink } from '../components/Links';

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

      <Heading as="h1" size={'4xl'} my={10}>
        Stuff I like
      </Heading>

      <Section
        heading="Software dev"
        items={[
          <ExternalLink key="next" href="https://nextjs.org/">
            Next.js
          </ExternalLink>,
          <ExternalLink key="prisma" href="https://www.prisma.io/">
            Prisma
          </ExternalLink>,
          <ExternalLink key="react" href="https://reactjs.org/">
            React
          </ExternalLink>,
          <ExternalLink key="chakra" href="https://chakra-ui.com/">
            Chakra UI
          </ExternalLink>,
          <ExternalLink key="vercel" href="https://vercel.com/">
            Vercel
          </ExternalLink>,
          <ExternalLink key="typescript" href="https://www.typescriptlang.org/">
            TypeScript
          </ExternalLink>,
          <ExternalLink key="datocms" href="https://www.datocms.com/">
            DatoCMS
          </ExternalLink>,
        ]}
      />

      <Section
        heading="Health & nutrition"
        items={[
          <ExternalLink key="heights" href="https://www.yourheights.com/">
            Heights
          </ExternalLink>,
          <ExternalLink key="huel" href="https://huel.com/">
            Huel
          </ExternalLink>,
          <ExternalLink key="greens" href="https://www.hion.com/products/hion-green-powder-ultimate-blend-superfood">
            Greens powder
          </ExternalLink>,
        ]}
      />

      <Section
        heading="Digital products"
        items={[
          <ExternalLink key="loom" href="https://www.loom.com/">
            Loom
          </ExternalLink>,
        ]}
      />

      <Section
        heading="Books"
        items={[
          <ExternalLink key="sapiens" href="https://www.ynharari.com/book/sapiens-2/">
            <em>Sapiens</em> by Yuval Noah Harari
          </ExternalLink>,
          <ExternalLink key="factfulness" href="https://www.gapminder.org/factfulness-book/">
            <em>Factfulness</em> by Hans Rosling
          </ExternalLink>,
          <ExternalLink key="the-lean-startup" href="http://theleanstartup.com/book">
            <em>The Lean Startup</em> by Eric Ries
          </ExternalLink>,
        ]}
      />
    </Box>
  );
};

// const Section

export default StuffILike;

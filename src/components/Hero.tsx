// Adapted from https://gist.github.com/franky47/321f55497eed657ec7d9652a5c33fcb7
import { Flex, Box, Heading, HStack, FlexProps, useBreakpointValue } from '@chakra-ui/react';
import { Image, ResponsiveImageType } from 'react-datocms';
import use100vh from '../hooks/use100vh';
import NavAnchor from '../navigation/components/NavAnchor';

interface HeroProps extends FlexProps {
  profilePicture: {
    responsiveImage: ResponsiveImageType;
  };
  anchorId?: string; // For scrolling to the section using this id as hash in url whilst taking the navbar offset into account
}

const Hero = ({ profilePicture, anchorId, ...rest }: HeroProps) => {
  const ref = use100vh();
  return (
    <>
      {anchorId && <NavAnchor id={anchorId} />}
      <Flex ref={ref} flexDir="column" justifyContent="center" {...rest}>
        <HStack h="max-content" spacing={0}>
          <Box minW={{ base: '120px', md: '180px' }}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image data={profilePicture.responsiveImage} pictureStyle={{ transform: 'rotate(15deg)' }} />{' '}
            {/* alt provided in data */}
          </Box>
          <Box>
            <Heading fontSize={useBreakpointValue({ base: '6xl', md: '8xl' })} lineHeight="70%">
              Daniel
            </Heading>
            <Heading fontSize={useBreakpointValue({ base: '2.35rem', md: '6xl' })}>HAUSNER</Heading>
            <Heading as={'h1'} fontWeight="medium" fontSize={{ base: 'xl', md: '2xl' }}>
              I bring ideas to life with web technologies.
            </Heading>
          </Box>
        </HStack>
        <Heading as="h2" fontWeight="medium" fontSize={{ base: 'xl', md: '2xl' }} mt={4}>
          Meticulous.
          <br />
          Curious.
          <br />
          Unconventional.
          <br />
        </Heading>
      </Flex>
    </>
  );
};

export default Hero;

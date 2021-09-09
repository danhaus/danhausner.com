// Adapted from https://gist.github.com/franky47/321f55497eed657ec7d9652a5c33fcb7
import { Flex, Box, Heading, HStack, FlexProps } from '@chakra-ui/react';
import { PROFILE_PIC_SIZE } from '../lib/datocms';
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
        <HStack h="max-content" alignItems="start">
          <Box minW={`${PROFILE_PIC_SIZE}px`}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image data={profilePicture.responsiveImage} pictureStyle={{ transform: 'rotate(15deg)' }} />{' '}
            {/* alt provided in data */}
          </Box>
          <Box>
            <Heading fontSize="6xl" lineHeight="9">
              Daniel
            </Heading>
            <Heading fontSize="2.35rem">HAUSNER</Heading>
            <Heading as={'h1'} fontWeight="medium" fontSize="xl">
              I bring ideas to life with web technologies.
            </Heading>
          </Box>
        </HStack>
        <Heading as="h2" fontWeight="medium" fontSize="xl" mt={4}>
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

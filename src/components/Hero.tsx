// Adapted from https://gist.github.com/franky47/321f55497eed657ec7d9652a5c33fcb7
import { Box, Heading, HStack } from '@chakra-ui/react';
import { PROFILE_PIC_SIZE } from '../lib/datocms';
import { Image, ResponsiveImageType } from 'react-datocms';
import use100vh from '../hooks/use100vh';

interface HeroProps {
  profilePicture: {
    responsiveImage: ResponsiveImageType;
  };
}

const Hero = ({ profilePicture }: HeroProps) => {
  const ref = use100vh();
  return (
    <HStack ref={ref}>
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
  );
};

export default Hero;

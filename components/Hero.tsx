import { Box, Heading, HStack } from '@chakra-ui/react';
import { PROFILE_PIC_SIZE } from '../lib/datocms';
import { Image, ResponsiveImageType } from 'react-datocms';

interface HeroProps {
  profilePicture: {
    responsiveImage: ResponsiveImageType;
  };
}

const Hero = ({ profilePicture }: HeroProps) => {
  return (
    <HStack>
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
          I bring ideas to live with web technologies.
        </Heading>
      </Box>
    </HStack>
  );
};

export default Hero;

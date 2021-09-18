// Adapted from https://gist.github.com/franky47/321f55497eed657ec7d9652a5c33fcb7
import { Flex, Box, Heading, HStack, FlexProps, useBreakpointValue, Fade, SlideFade } from '@chakra-ui/react';
import { Image, ResponsiveImageType } from 'react-datocms';
import use100vh from '../../hooks/use100vh';
import NavAnchor from '../../navigation/components/NavAnchor';
import Lottie from 'lottie-react';
import * as scrollAnimation from '../../static/scroll-lottie.json';
import { useWindowScroll } from 'react-use';

interface HeroProps extends FlexProps {
  profilePicture: {
    responsiveImage: ResponsiveImageType;
  };
  anchorId?: string; // For scrolling to the section using this id as hash in url whilst taking the navbar offset into account
}

const Hero = ({ profilePicture, anchorId, ...rest }: HeroProps) => {
  const ref = use100vh();
  const { y } = useWindowScroll();
  const scrollAnimationVisible = y === 0;

  return (
    <Flex ref={ref} flexDir="column" justifyContent="center" alignItems="center">
      {anchorId && <NavAnchor id={anchorId} />}
      <Flex flexDir="column" {...rest} overflow="hidden">
        <SlideFade in offsetX={'10rem'} offsetY={'0'} transition={{ enter: { duration: 0.8, delay: 0.2 } }}>
          <HStack h="max-content" spacing={0}>
            <Box minW={{ base: '120px', md: '180px' }}>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <Image
                lazyLoad={false}
                data={profilePicture.responsiveImage}
                pictureStyle={{ transform: 'rotate(15deg)' }}
              />{' '}
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
        </SlideFade>
        <Heading as="h2" fontWeight="medium" fontSize={{ base: 'xl', md: '2xl' }} mt={4}>
          <SlideFade in offsetX={'-5rem'} offsetY={'0'} transition={{ enter: { duration: 0.6, delay: 0.8 } }}>
            Meticulous.
            <br />
            Curious.
            <br />
            Unconventional.
            <br />
          </SlideFade>
        </Heading>
      </Flex>
      <Flex pos="fixed" bottom={4}>
        <Fade in={scrollAnimationVisible} transition={{ enter: { duration: 1.2, delay: 2.5 } }}>
          {/* https://lottiefiles.com/33133-scroll-down */}
          <Lottie
            animationData={scrollAnimation}
            style={{ transform: 'rotate(180deg)', width: `${useBreakpointValue({ base: 5, md: 8 })}em` }}
          />
        </Fade>
      </Flex>
    </Flex>
  );
};

export default Hero;

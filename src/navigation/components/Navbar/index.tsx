// Adapted & modified from https://chakra-templates.dev/navigation/navbar
// Highlighted section: https://codedaily.io/tutorials/Sticky-Header-with-Highlighting-Sections-on-Scroll

import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import DesktopNav from './DesktopNav';
import React, { useEffect, useState } from 'react';
import MobileNav from './MobileNav';
import { NAV_BAR_HEIGHT, SectionIds } from '../../constants';
import { getElementDimensions } from '../../utils';

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [visibleSectionId, setVisibleSectionId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + NAV_BAR_HEIGHT;

      const selectedSectionId = Object.values(SectionIds).find((sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) {
          const { offsetBottom, offsetTop } = getElementDimensions(el);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selectedSectionId && selectedSectionId !== visibleSectionId) {
        setVisibleSectionId(selectedSectionId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleSectionId]);

  return (
    <Box as="nav" position="fixed" w="100vw">
      <Flex
        bg={useColorModeValue('primary.light', 'gray.800')}
        opacity={0.92}
        color={useColorModeValue('gray.600', 'white')}
        h={`${NAV_BAR_HEIGHT}px`}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}
      >
        <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={<HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex display={{ base: 'none', md: 'flex' }} flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav visibleSection={visibleSectionId} />
          </Flex>
        </Flex>
      </Flex>

      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs"
      >
        <DrawerContent>
          <MobileNav visibleSection={visibleSectionId} onClose={onClose} />
        </DrawerContent>
        <DrawerOverlay style={{ background: 'rgb(0,0,0,0.3)', backdropFilter: 'blur(4px)' }} />
      </Drawer>
    </Box>
  );
};

export default Navbar;

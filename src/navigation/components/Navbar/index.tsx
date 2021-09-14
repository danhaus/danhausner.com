// Adapted & modified from https://chakra-templates.dev/navigation/navbar
// Highlighted section: https://codedaily.io/tutorials/Sticky-Header-with-Highlighting-Sections-on-Scroll

import {
  Center,
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
import { LAST_NAV_ITEM, NAV_BAR_HEIGHT, NavigationIds, SectionIds } from '../../constants';
import { getElementDimensions } from '../../utils';
import { useLocation } from 'react-use';

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [visibleItem, setVisibleItem] = useState(SectionIds.HOME);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === '/') {
        if (window.scrollY + window.innerHeight === document.documentElement.scrollHeight) {
          setVisibleItem(LAST_NAV_ITEM);
          return;
        }

        const scrollPosition = window.scrollY + window.innerHeight / 2;
        const selectedSectionId = Object.values(SectionIds).find((sectionId) => {
          const el = document.getElementById(sectionId);
          if (el) {
            const { offsetBottom, offsetTop } = getElementDimensions(el);
            return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
          }
        });

        if (selectedSectionId && selectedSectionId !== visibleItem) {
          setVisibleItem(selectedSectionId);
        }
      } else {
        switch (pathname) {
          case `/${NavigationIds.STUFF_I_LIKE}`:
            setVisibleItem(NavigationIds.STUFF_I_LIKE);
            break;
          default:
            setVisibleItem('');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleItem, pathname]);

  return (
    <Center as="nav" position="fixed" w={'100%'} zIndex={999}>
      <Flex
        flex={1}
        bg={useColorModeValue('background.light', 'background.dark')}
        opacity={0.92}
        color={useColorModeValue('tertiary.light', 'white')}
        h={`${NAV_BAR_HEIGHT}px`}
        py={{ base: 2 }}
        align={'center'}
      >
        <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={<HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            color="secondary.light"
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex display={{ base: 'none', md: 'flex' }} flex={{ base: 1 }} justify={'start'}>
          <DesktopNav visibleSection={visibleItem} />
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
          <MobileNav visibleSection={visibleItem} onClose={onClose} />
        </DrawerContent>
        <DrawerOverlay style={{ background: 'rgb(0,0,0,0.3)', backdropFilter: 'blur(4px)' }} />
      </Drawer>
    </Center>
  );
};

export default Navbar;

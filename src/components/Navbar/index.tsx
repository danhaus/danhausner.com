// Adapted & modified from https://chakra-templates.dev/navigation/navbar

import {
  Box,
  Flex,
  Text,
  IconButton,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  DrawerContent,
  Drawer,
  DrawerOverlay,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import DesktopNav from './DesktopNav';
import React from 'react';
import MobileNav from './MobileNav';

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Box as="nav" position="fixed" w="100vw">
      <Flex
        bg={useColorModeValue('primary.light', 'gray.800')}
        opacity={0.92}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
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
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
          >
            Logo
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
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
          <MobileNav onClose={onClose} />
        </DrawerContent>
        <DrawerOverlay style={{ background: 'rgb(0,0,0,0.3)', backdropFilter: 'blur(4px)' }} />
      </Drawer>
    </Box>
  );
};

export default Navbar;

export interface NavItem {
  label: string;
  subLabel?: string;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Inspiration',
  },
  {
    label: 'Find Work',
  },
  {
    label: 'Learn Design',
    href: '#',
  },
  {
    label: 'Hire Designers',
    href: '#',
  },
];

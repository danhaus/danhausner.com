// Adapted & modified from https://chakra-templates.dev/navigation/navbar

import {
  Box,
  Flex,
  Text,
  IconButton,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  DrawerContent,
  Drawer,
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
        bg={useColorModeValue('rgba(247, 235, 212, 0.92)', 'gray.800')}
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

      <Collapse in={isOpen} animateOpacity>
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <MobileNav onClose={onClose} />
          </DrawerContent>
        </Drawer>
      </Collapse>
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

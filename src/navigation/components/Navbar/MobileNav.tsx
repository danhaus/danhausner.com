// Adapted & modified from https://chakra-templates.dev/navigation/sidebar

import { Box, BoxProps, Flex, FlexProps, Link, useColorModeValue, Text } from '@chakra-ui/react';
import React, { ReactText } from 'react';
import NextLink from 'next/link';
import { INTERNAL_NAV_ITEMS, SECTION_APPENDIX } from '../../constants';

interface SidebarProps extends BoxProps {
  visibleSection: string;
  onClose: () => void;
}

const MobileNav = ({ visibleSection, onClose, ...rest }: SidebarProps) => {
  return (
    <Box bg={useColorModeValue('background.light', 'background.dark')} py={6} w="full" pos="fixed" h="full" {...rest}>
      {INTERNAL_NAV_ITEMS.map((navItem) => (
        <NavItem
          key={navItem.label}
          href={navItem.href}
          highlighted={navItem.href.replace('/#', '') === visibleSection.replace(SECTION_APPENDIX, '')}
          onClick={onClose}
        >
          {navItem.label}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  children: ReactText;
  href: string;
  highlighted: boolean;
}

const NavItem = ({ children, href, highlighted, ...rest }: NavItemProps) => {
  console.log(`${href} is highlighted ${highlighted}`);
  return (
    <NextLink href={href} passHref>
      <Link href="#" style={{ textDecoration: 'none' }}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="md"
          role="group"
          bg={highlighted ? 'tertiary.light' : ''}
          {...rest}
        >
          <Text fontSize="lg" casing="uppercase" fontWeight="bold" color={highlighted ? 'white' : 'tertiary.light'}>
            {children}
          </Text>
        </Flex>
      </Link>
    </NextLink>
  );
};

export default MobileNav;

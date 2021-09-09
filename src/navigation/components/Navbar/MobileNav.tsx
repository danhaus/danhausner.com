// Adapted & modified from https://chakra-templates.dev/navigation/sidebar

import { Box, BoxProps, Flex, FlexProps, Link, useColorModeValue, Text } from '@chakra-ui/react';
import React, { ReactText } from 'react';
import NextLink from 'next/link';
import { NAV_ITEMS, SECTION_APPENDIX } from '../../constants';

interface SidebarProps extends BoxProps {
  visibleSection: string;
  onClose: () => void;
}

const MobileNav = ({ visibleSection, onClose, ...rest }: SidebarProps) => {
  console.log('visibleSection', visibleSection);
  return (
    <Box
      bg={useColorModeValue('rgba(247, 235, 212, 1.0)', 'gray.900')}
      py={6}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      {NAV_ITEMS.map((navItem) => (
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

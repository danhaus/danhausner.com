// Adapted & modified from https://chakra-templates.dev/navigation/sidebar

import { Box, BoxProps, Flex, FlexProps, Link, useColorModeValue } from '@chakra-ui/react';
import React, { ReactText } from 'react';
import NextLink from 'next/link';
import { NAV_ITEMS } from '../../constants';

interface SidebarProps extends BoxProps {
  visibleSection: string;
}

const MobileNav = ({ ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('rgba(247, 235, 212, 1.0)', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      {NAV_ITEMS.map((navItem) => (
        <NavItem key={navItem.label} href={navItem.href}>
          {navItem.label}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  children: ReactText;
  href: string;
}

const NavItem = ({ children, href, ...rest }: NavItemProps) => {
  return (
    <NextLink href={href} passHref>
      <Link href="#" style={{ textDecoration: 'none' }}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'cyan.400',
            color: 'white',
          }}
          {...rest}
        >
          {children}
        </Flex>
      </Link>
    </NextLink>
  );
};

export default MobileNav;

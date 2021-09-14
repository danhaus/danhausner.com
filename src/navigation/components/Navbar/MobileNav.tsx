// Adapted & modified from https://chakra-templates.dev/navigation/sidebar

import { Box, BoxProps, Flex, FlexProps, useColorModeValue, Text } from '@chakra-ui/react';
import React, { ReactText } from 'react';
import { INTERNAL_NAV_ITEMS, SECTION_APPENDIX } from '../../constants';
import InternalLink from '../../../components/InternalLink';

interface SidebarProps extends BoxProps {
  visibleSection: string;
  onClose: () => void;
}

const MobileNav = ({ visibleSection, onClose, ...rest }: SidebarProps) => {
  return (
    <Box bg={useColorModeValue('background.light', 'background.dark')} py={6} w="full" pos="fixed" h="full" {...rest}>
      {INTERNAL_NAV_ITEMS.map((navItem) => (
        <MobileNavItem
          key={navItem.label}
          href={navItem.href}
          highlighted={navItem.href.replace('/#', '') === visibleSection.replace(SECTION_APPENDIX, '')}
          onClick={onClose}
        >
          {navItem.label}
        </MobileNavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  children: ReactText;
  href: string;
  highlighted: boolean;
}

const MobileNavItem = ({ children, href, highlighted, ...rest }: NavItemProps) => {
  console.log(`${href} is highlighted ${highlighted}`);
  return (
    <InternalLink href={href} style={{ textDecoration: 'none' }}>
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
    </InternalLink>
  );
};

export default MobileNav;

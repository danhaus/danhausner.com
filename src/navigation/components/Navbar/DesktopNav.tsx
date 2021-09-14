import { Flex, FlexProps, Link, Stack, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { NAV_BAR_HEIGHT, INTERNAL_NAV_ITEMS, SECTION_APPENDIX } from '../../constants';
import React, { ReactText } from 'react';

const BORDER_WIDTH = 3; // Chakra Units

interface DesktopNavProps {
  visibleSection: string;
}

const DesktopNav = ({ visibleSection }: DesktopNavProps) => {
  return (
    <Stack direction={'row'} spacing={0}>
      {INTERNAL_NAV_ITEMS.map((navItem) => (
        <DesktopNavItem
          key={navItem.label}
          href={navItem.href}
          highlighted={navItem.href.replace('/#', '') === visibleSection.replace(SECTION_APPENDIX, '')}
        >
          {navItem.label}
        </DesktopNavItem>
      ))}
    </Stack>
  );
};

interface DesktopNavItemProps extends FlexProps {
  children: ReactText;
  href: string;
  highlighted: boolean;
}

const DesktopNavItem = ({ children, href, highlighted }: DesktopNavItemProps) => {
  const linkHoverColor = useColorModeValue('primary.light', 'primary.dark');
  return (
    <Flex
      h={`${NAV_BAR_HEIGHT}px`}
      alignItems="center"
      borderBottomColor={highlighted ? 'secondary.light' : 'transparent'}
      color={highlighted ? 'secondary.light' : 'default'}
      borderBottomWidth={BORDER_WIDTH}
      borderTopWidth={BORDER_WIDTH}
      borderTopColor="transparent"
    >
      <NextLink href={href} passHref>
        <Link
          p={2}
          fontSize="lg"
          fontWeight="bold"
          _hover={{
            textDecoration: 'none',
            color: linkHoverColor,
          }}
        >
          {children}
        </Link>
      </NextLink>
    </Flex>
  );
};

export default DesktopNav;

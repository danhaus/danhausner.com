import { Center, Divider, Flex, FlexProps, Link, Stack, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { NAV_BAR_HEIGHT, INTERNAL_NAV_ITEMS, SECTION_APPENDIX, EXTERNAL_NAV_ITEMS } from '../../constants';
import React, { ReactText } from 'react';

const BORDER_WIDTH = 3; // Chakra Units

interface DesktopNavProps {
  visibleSection: string;
}

const DesktopNav = ({ visibleSection }: DesktopNavProps) => {
  const visibleSectionWithoutAppendix = visibleSection.replace(SECTION_APPENDIX, '');
  return (
    <Stack direction={'row'} spacing={0} align="center">
      {INTERNAL_NAV_ITEMS.map((navItem) => (
        <DesktopNavItem
          key={navItem.label}
          href={navItem.href}
          highlighted={navItem.href.replace('/#', '') === visibleSectionWithoutAppendix}
        >
          {navItem.label}
        </DesktopNavItem>
      ))}
      <Center h="60%">
        <Divider mx={4} orientation="vertical" opacity={0.6} borderLeftWidth={'2px'} borderColor={'tertiary.light'} />
      </Center>
      {EXTERNAL_NAV_ITEMS.map((navItem) => (
        <DesktopNavItem
          key={navItem.label}
          href={navItem.href}
          highlighted={navItem.href.replace('/', '') === visibleSection}
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

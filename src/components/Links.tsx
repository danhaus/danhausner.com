import { Link, LinkProps } from '@chakra-ui/react';
import { UrlObject } from 'url';
import NextLink from 'next/link';
import React from 'react';

const linkStyles: Omit<LinkProps, 'href'> = {
  textDecoration: 'underline',
  textColor: 'secondary.light',
  textDecorationThickness: '0.125em',
  textUnderlineOffset: '2.5px',
  _hover: {
    textColor: 'inherit',
  },
};

interface ExternalLinkProps extends Omit<LinkProps, 'href'> {
  href: string;
}

export const ExternalLink = ({ children, href, ...rest }: ExternalLinkProps) => {
  return (
    <Link isExternal href={href} {...linkStyles} {...rest}>
      {children}
    </Link>
  );
};

interface InternalLinkProps extends Omit<LinkProps, 'href'> {
  href: string | UrlObject;
  variant?: 'plain' | 'styled';
}

export const InternalLink = ({ children, href, variant = 'plain', ...rest }: InternalLinkProps) => {
  const styles: Omit<LinkProps, 'href'> = variant === 'styled' ? linkStyles : {};
  return (
    <NextLink href={href} passHref>
      <Link {...styles} {...rest}>
        {children}
      </Link>
    </NextLink>
  );
};

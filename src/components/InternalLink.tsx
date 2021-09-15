import { Link, LinkProps } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { UrlObject } from 'url';

interface InternalLinkPros extends Omit<LinkProps, 'href'> {
  href: string | UrlObject;
  variant?: 'plain' | 'styled';
}

const InternalLink = ({ children, href, variant = 'plain', ...rest }: InternalLinkPros) => {
  const styles: Omit<LinkProps, 'href'> =
    variant === 'styled'
      ? {
          textDecoration: 'underline',
          textColor: 'secondary.light',
          textDecorationThickness: '0.125em',
          textUnderlineOffset: '2.5px',
          _hover: {
            textColor: 'inherit',
          },
        }
      : {};
  return (
    <NextLink href={href} passHref>
      <Link {...styles} {...rest}>
        {children}
      </Link>
    </NextLink>
  );
};

export default InternalLink;

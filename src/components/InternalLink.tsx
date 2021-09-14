import { Link, LinkProps } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { UrlObject } from 'url';

interface InternalLinkPros extends Omit<LinkProps, 'href'> {
  href: string | UrlObject;
}

const InternalLink = ({ children, href, ...rest }: InternalLinkPros) => {
  return (
    <NextLink href={href} passHref>
      <Link {...rest}>{children}</Link>
    </NextLink>
  );
};

export default InternalLink;

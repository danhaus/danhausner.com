import { Link, LinkProps } from '@chakra-ui/react';

const ExternalLink = ({ children, ...rest }: LinkProps) => {
  return (
    <Link
      isExternal
      textDecoration="underline"
      textDecorationStyle="dashed"
      textDecorationThickness="0.125em"
      textUnderlineOffset="2.5px"
      _hover={{
        textDecorationStyle: 'solid',
      }}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default ExternalLink;

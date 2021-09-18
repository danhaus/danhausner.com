import { Text } from '@chakra-ui/react';
import { ExternalLink } from './Links';

const Footer = () => {
  return (
    <footer>
      <Text textAlign="center" mb={10} px={2}>
        This website is built using <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink>,{' '}
        <ExternalLink href="https://reactjs.org/">React</ExternalLink>,{' '}
        <ExternalLink href="https://chakra-ui.com/">Chakra UI</ExternalLink>,{' '}
        <ExternalLink href="https://www.datocms.com/">DatoCMS</ExternalLink>, and it is hosted on{' '}
        <ExternalLink href="https://vercel.com/">Vercel</ExternalLink>.<br /> The source code is available on{' '}
        <ExternalLink href="https://github.com/danhaus/danhausner.com">my GitHub</ExternalLink>.{' '}
      </Text>
    </footer>
  );
};

export default Footer;

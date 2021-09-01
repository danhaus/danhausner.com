import { Box, BoxProps, Heading } from '@chakra-ui/react';

interface SectionProps extends BoxProps {
  heading?: string;
}

const Section = ({ heading, children, ...rest }: SectionProps) => {
  return (
    <Box as="section" {...rest}>
      {heading && <Heading mb={4}>{heading}</Heading>}
      {children}
    </Box>
  );
};

export default Section;

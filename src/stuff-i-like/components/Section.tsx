import { Box, BoxProps, Heading, Text } from '@chakra-ui/react';
import { ReactNode, ReactText } from 'react';

interface SectionProps extends BoxProps {
  heading: ReactText;
  items: ReactNode[];
}

// Renders a list of items with given heading
const Section = ({ heading, items, ...rest }: SectionProps) => {
  return (
    <Box as="section" {...rest} mt={12}>
      <Heading mb={6} size={'2xl'}>
        {heading}
      </Heading>
      {items.map((item, index) => (
        <Text key={index} mt={2}>
          {item}
        </Text>
      ))}
    </Box>
  );
};

export default Section;

import { Box, BoxProps, Heading } from '@chakra-ui/react';
import NavAnchor from '../navigation/components/NavAnchor';

interface SectionProps extends BoxProps {
  heading?: string;
  anchorId?: string; // For scrolling to the section using this id as hash in url whilst taking the navbar offset into account
}

const Section = ({ heading, children, anchorId, ...rest }: SectionProps) => {
  return (
    <Box as="section" {...rest}>
      {/* Offset anchor by navbar height for automatic scrolling to section */}
      {anchorId && <NavAnchor id={anchorId} />}
      {heading && (
        <Heading mb={10} size="4xl" color="tertiary.light">
          {heading}
        </Heading>
      )}
      {children}
    </Box>
  );
};

export default Section;

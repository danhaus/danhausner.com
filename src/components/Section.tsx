import { Box, BoxProps, Heading } from '@chakra-ui/react';
import { NAV_BAR_HEIGHT } from '../navigation/constants';

interface SectionProps extends BoxProps {
  heading?: string;
  anchorId?: string; // For scrolling to the section using this id as hash in url whilst taking the navbar offset into account
}

const Section = ({ heading, children, anchorId, ...rest }: SectionProps) => {
  return (
    <Box as="section" {...rest}>
      {/* Offset anchor by navbar height for automatic scrolling to section */}
      {anchorId && (
        <a
          id={anchorId}
          style={{
            display: 'block',
            position: 'relative',
            top: `-${NAV_BAR_HEIGHT}px`,
            visibility: 'hidden',
          }}
        />
      )}
      {heading && <Heading mb={4}>{heading}</Heading>}
      {children}
    </Box>
  );
};

export default Section;

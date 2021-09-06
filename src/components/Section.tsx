import { Box, BoxProps, Heading } from '@chakra-ui/react';
import { NAV_BAR_HEIGHT } from '../navigation/constants';

interface SectionProps extends BoxProps {
  heading?: string;
}

const Section = ({ heading, children, id, ...rest }: SectionProps) => {
  return (
    <Box as="section" {...rest}>
      {/* Offset anchor by navbar height for automatic scrolling to section */}
      {id && (
        <a
          id={id}
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

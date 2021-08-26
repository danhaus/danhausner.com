import { ReactNode } from 'react';
import { Heading } from '@chakra-ui/react';

interface SectionProps {
  heading?: string;
  children: ReactNode;
}

const Section = ({ heading, children }: SectionProps) => {
  return (
    <section>
      {heading && <Heading>{heading}</Heading>}
      {children}
    </section>
  );
};

export default Section;

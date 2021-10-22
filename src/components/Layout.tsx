import { Center, Container } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Navbar from '../navigation/components/Navbar';
import Footer from './Footer';

export const SECTION_SPACING = 28;

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Center d="column">
      <Navbar />
      <Container mb={SECTION_SPACING}>
        <main>{children}</main>
      </Container>
      <Footer />;
    </Center>
  );
};

export default Layout;

import { Container } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Navbar from '../navigation/components/Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;

import { Container } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Navbar />
      <main>{children}</main>
      <footer>Placeholder for footer.</footer>
    </Container>
  );
};

export default Layout;

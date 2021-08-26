import { Container } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <main>{children}</main>
      <footer>Placeholder for footer.</footer>
    </Container>
  );
};

export default Layout;

import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box bg="rgba(247, 235, 212, 1)">
      <main>{children}</main>
      <footer>Placeholder for footer.</footer>
    </Box>
  );
};

export default Layout;

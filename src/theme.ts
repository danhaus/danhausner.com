import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    // Backgrounds
    background: {
      light: '#f7ebd4',
      dark: '#141b1f',
    },
    // Font
    primary: {
      light: '#292929',
      dark: '#f5f5f5',
    },
    secondary: {
      light: '#595959',
      dark: '#b3b3b3',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'background.light',
        color: 'primary.light',
      },
    },
  },
});

export default theme;

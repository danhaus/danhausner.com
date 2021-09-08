import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    // Backgrounds
    primary: {
      light: '#f7ebd4',
      dark: '#141b1f',
    },
    // Font
    secondary: {
      light: '#292929',
      dark: '#f5f5f5',
    },
    // Dimmed font
    tertiary: {
      light: '#595959',
      dark: '#b3b3b3',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'primary.light',
        color: 'secondary.light',
      },
    },
  },
});

export default theme;

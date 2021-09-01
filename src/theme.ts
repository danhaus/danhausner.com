import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      light: '#f7ebd4',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'primary.light',
      },
    },
  },
});

export default theme;

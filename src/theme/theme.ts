import type { StyleFunctionProps } from '@chakra-ui/styled-system';

const theme = {
  styles: {
    global: (props: StyleFunctionProps) => ({
      'html, body': {
        backgroundColor: props.colorMode === 'dark' ? 'gray.800' : 'gray.50'
      }
    })
  },
  colors: {
    primary: {
      light: 'rgb(46, 28, 240)',
      dark: 'rgb(0, 149, 250)'
    },
    primaryBg: {
      light: 'rgb(190, 227, 248)',
      dark: 'rgb(61, 79, 106)'
    },
    secondary: {
      light: 'rgb(1, 193, 147)',
      dark: 'rgb(44, 194, 159)'
    }
  }
};

export default theme;

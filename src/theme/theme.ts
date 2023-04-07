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
      light: 'rgb(68, 51, 255)',
      dark: 'rgb(97, 123, 255)'
    },
    primaryBg: {
      light: 'rgb(190, 227, 248)',
      dark: 'rgb(61, 79, 106)'
    },
    secondary: {
      light: 'rgb(230, 0, 103)',
      dark: 'rgb(255, 10, 120)'
    }
  }
};

export default theme;

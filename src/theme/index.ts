import { extendTheme } from '@chakra-ui/react';
import theme from './theme';
import config from './config';

export default extendTheme({ ...theme, config });

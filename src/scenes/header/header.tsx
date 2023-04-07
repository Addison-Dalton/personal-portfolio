import { Box, useColorMode } from '@chakra-ui/react';

import NavBar from './nav';

const Header = () => {
  const { colorMode } = useColorMode();
  // temp height, will eventually hold elements
  return (
    <Box
      position="relative"
      as="header"
      height="100px"
      bgColor={colorMode === 'dark' ? 'primaryBg.dark' : 'primaryBg.light'}
    >
      <NavBar />
    </Box>
  );
};

export default Header;

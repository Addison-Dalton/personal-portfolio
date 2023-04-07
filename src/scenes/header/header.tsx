import { Box } from '@chakra-ui/react';

import NavBar from './nav';

const Header = () => {
  // temp height, will eventually hold elements
  return (
    <Box position="relative" as="header" height="100px" bgColor="blue.100">
      <NavBar />
    </Box>
  );
};

export default Header;

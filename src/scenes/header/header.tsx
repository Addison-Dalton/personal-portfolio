import { Box } from '@chakra-ui/react';
import { useColor } from 'utils/hooks';

import NavBar from './nav';

const Header = () => {
  const { color } = useColor('primaryBg');
  // temp height, will eventually hold elements
  return (
    <Box position="relative" as="header" height="100px" bgColor={color}>
      <NavBar />
    </Box>
  );
};

export default Header;

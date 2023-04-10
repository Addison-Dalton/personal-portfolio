import { Flex, Link } from '@chakra-ui/react';
import { Link as RRLink } from 'react-router-dom';

import ColorModeToggle from 'components/color-mode-toggle';
import { useColor } from 'utils/hooks';
const NavBar = () => {
  const {
    colors: [primaryColor, primaryBgColor]
  } = useColor(['primary', 'primaryBg']);
  return (
    <Flex
      as="nav"
      alignItems="center"
      direction="row"
      backgroundColor={primaryBgColor}
      gap={3}
      position="fixed"
      top={0}
      width="100%"
      padding={5}
      zIndex={10}
    >
      <Link
        as={RRLink}
        to="/"
        fontSize="lg"
        fontWeight="bold"
        color={primaryColor}
      >
        {'Addison Dalton'}
      </Link>
      <Link as={RRLink} to="/projects">
        {'Projects'}
      </Link>
      <Link as={RRLink} to="/work">
        {'Work'}
      </Link>
      <Link as={RRLink} to="/about">
        {'About'}
      </Link>
      <Link as={RRLink} to="/contact">
        {'Contact'}
      </Link>
      <ColorModeToggle />
    </Flex>
  );
};

export default NavBar;

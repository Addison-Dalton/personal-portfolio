import { Flex, Link, useColorMode } from '@chakra-ui/react';
import { Link as RRLink } from 'react-router-dom';

import ColorModeToggle from 'components/color-mode-toggle';

const NavBar = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      as="nav"
      alignItems="center"
      direction="row"
      gap={3}
      position="fixed"
      top={0}
      width="100%"
      padding={5}
    >
      <Link
        as={RRLink}
        to="/"
        fontSize="lg"
        fontWeight="bold"
        color={colorMode === 'dark' ? 'primary.dark' : 'primary.light'}
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

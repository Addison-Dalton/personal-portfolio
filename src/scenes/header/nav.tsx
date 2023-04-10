import { Flex, Link } from '@chakra-ui/react';
import { Link as RRLink } from 'react-router-dom';

import ColorModeToggle from 'components/color-mode-toggle';
import { useColor } from 'utils/hooks';
const NavBar = () => {
  const color = useColor('primary');
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
      <Link as={RRLink} to="/" fontSize="lg" fontWeight="bold" color={color}>
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

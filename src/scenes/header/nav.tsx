import { Flex, Link, Text } from '@chakra-ui/react';
import { Link as RRLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Flex
      as="nav"
      direction="row"
      gap={3}
      position="fixed"
      top={0}
      width="100%"
      padding={2}
    >
      <Link as={RRLink} to="/" fontSize="lg" fontWeight={500}>
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
    </Flex>
  );
};

export default NavBar;

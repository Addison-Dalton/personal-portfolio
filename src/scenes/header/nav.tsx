import { Flex } from '@chakra-ui/react';

import ColorModeToggle from 'components/color-mode-toggle';
import { useColor } from 'utils/hooks';
import NavLink from './nav-link';

const NavBar = () => {
  const {
    colors: [primaryColor, primaryBgColor]
  } = useColor(['primary', 'primaryBg']);

  return (
    // TODO use HStack here?
    <Flex
      as="nav"
      alignItems="center"
      justifyContent="space-between"
      direction="row"
      backgroundColor={primaryBgColor}
      position="fixed"
      top={0}
      width="100%"
      padding={5}
      zIndex={10}
    >
      <NavLink
        to="/"
        fontSize="lg"
        fontWeight="bold"
        color={primaryColor}
        borderColor="transparent !important"
      >
        {'Addison Dalton'}
      </NavLink>
      <Flex gap={8} alignItems="center">
        <NavLink to="/projects">{'Projects'}</NavLink>
        <NavLink to="/work">{'Work'}</NavLink>
        <NavLink to="/about">{'About'}</NavLink>
        <NavLink to="/contact">{'Contact'}</NavLink>
        <ColorModeToggle />
      </Flex>
    </Flex>
  );
};

export default NavBar;

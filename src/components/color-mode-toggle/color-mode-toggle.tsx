import { IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <IconButton
      variant="ghost"
      padding={0}
      aria-label={isDark ? 'Activate light mode' : 'Activate dark mode'}
      icon={isDark ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
    />
  );
};

export default ColorModeToggle;

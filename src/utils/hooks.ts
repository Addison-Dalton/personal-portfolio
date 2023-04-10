import { useColorMode } from '@chakra-ui/react';

export const useColor = (baseColorKey: string) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const color = isDark ? `${baseColorKey}.dark` : `${baseColorKey}.light`;
  return { color, isDark };
};

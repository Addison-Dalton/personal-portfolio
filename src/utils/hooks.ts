import { useColorMode } from '@chakra-ui/react';

export const useColor = (baseColorKeys: string[]) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const colors = baseColorKeys.map((key) =>
    isDark ? `${key}.dark` : `${key}.light`
  );
  return { colors, isDark };
};

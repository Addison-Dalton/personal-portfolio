import { useColorMode } from '@chakra-ui/react';

export const useColor = (baseColorKey: string) => {
  const { colorMode } = useColorMode();
  return colorMode === 'dark'
    ? `${baseColorKey}.dark`
    : `${baseColorKey}.light`;
};

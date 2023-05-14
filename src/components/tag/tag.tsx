import { Tag as ChakraTag, TagProps } from '@chakra-ui/react';

import { useColor } from 'utils/hooks';

const Tag: React.FC<TagProps> = ({ children, ...props }) => {
  const {
    colors: [secondaryColor]
  } = useColor(['secondary']);

  return (
    <ChakraTag
      {...props}
      size="sm"
      borderRadius="full"
      variant="outline"
      color={secondaryColor}
      boxShadow="none"
      border="solid 1px"
      borderColor={secondaryColor}
    >
      {children}
    </ChakraTag>
  );
};

export default Tag;

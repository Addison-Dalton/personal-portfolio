import { ReactNode } from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';
import { useColor } from 'utils/hooks';

export type ProjectTextProps = {
  title?: string;
  text: string | ReactNode;
};

const ProjectText = ({ text, title }: ProjectTextProps) => {
  const {
    colors: [primaryColor, secondaryColor]
  } = useColor(['primaryBg', 'secondary']);
  return (
    // TODO - Center text with image, but keep title at top
    <Box
      flex={1}
      position="relative"
      minWidth="300px"
      maxWidth="500px"
      height="100%"
    >
      {title && (
        <Box
          position="absolute"
          textAlign={{ base: 'left', md: 'right' }}
          right={0}
          top="-5rem"
        >
          <Text color={secondaryColor}>{'Featured project'}</Text>
          <Heading as="h3" fontSize="3xl">
            {title}
          </Heading>
        </Box>
      )}
      <Text
        fontSize="lg"
        padding={3}
        paddingLeft={{ base: 0, md: 12 }}
        roundedRight="md"
        // TODO - alpha this color some?
        backgroundColor={{ base: '', md: primaryColor }}
      >
        {text}
      </Text>
    </Box>
  );
};

export default ProjectText;

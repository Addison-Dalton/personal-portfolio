import { ReactNode } from 'react';
import { Box, Text, Heading, Hide } from '@chakra-ui/react';
import { useColor } from 'utils/hooks';

export type ProjectTextProps = {
  title?: string;
  text: string | ReactNode;
  reverseContent?: boolean;
};

const ProjectText = ({ text, title, reverseContent }: ProjectTextProps) => {
  const {
    colors: [primaryColor, secondaryColor]
  } = useColor(['primaryBg', 'secondary']);
  return (
    <Box>
      {title && (
        <Box
          textAlign={{ base: 'center', md: reverseContent ? 'left' : 'right' }}
          marginBottom={{ base: 1, md: 3 }}
        >
          <Hide below="md">
            <Text color={secondaryColor}>{'Featured project'}</Text>
          </Hide>
          <Heading as="h3" fontSize="3xl">
            {title}
          </Heading>
        </Box>
      )}
      <Text
        fontSize="lg"
        paddingBottom={3}
        paddingTop={{ base: 0, md: 3 }}
        paddingLeft={{ base: 0, md: reverseContent ? 3 : 12 }}
        paddingRight={{ base: 0, md: reverseContent ? 12 : 3 }}
        roundedRight={reverseContent ? 'none' : 'md'}
        roundedLeft={reverseContent ? 'md' : 'none'}
        // TODO - alpha this color some?
        backgroundColor={{ base: '', md: primaryColor }}
      >
        {text}
      </Text>
    </Box>
  );
};

export default ProjectText;

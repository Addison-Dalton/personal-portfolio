import { ReactNode } from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';
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
    <>
      {title && (
        <Box
          display={{ base: 'none', md: 'block' }}
          position="absolute"
          textAlign={{ base: 'left', md: reverseContent ? 'left' : 'right' }}
          right={reverseContent ? 'initial' : 0}
          left={reverseContent ? 0 : 'initial'}
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
        paddingBottom={3}
        paddingTop={{ base: 8, md: 3 }}
        paddingLeft={{ base: 0, md: reverseContent ? 3 : 12 }}
        paddingRight={{ base: 0, md: reverseContent ? 12 : 3 }}
        roundedRight={reverseContent ? 'none' : 'md'}
        roundedLeft={reverseContent ? 'md' : 'none'}
        // TODO - alpha this color some?
        backgroundColor={{ base: '', md: primaryColor }}
      >
        {text}
      </Text>
    </>
  );
};

export default ProjectText;

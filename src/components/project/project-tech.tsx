import { HStack, Tag } from '@chakra-ui/react';

import { useColor } from 'utils/hooks';

export type ProjectTechProps = {
  techs?: string[];
  alignTags?: 'left' | 'right';
};

const ProjectTech = ({ techs, alignTags = 'right' }: ProjectTechProps) => {
  const {
    colors: [secondaryColor]
  } = useColor(['secondary']);

  if (!techs || techs.length === 0) {
    return null;
  }

  // TODO figure out mobile
  // Should they wrap?
  // Also, inclusion of the tags seems to be delaying when the text should wrap under the image.
  return (
    <HStack
      spacing={4}
      position="absolute"
      bottom="-2rem"
      right={alignTags === 'right' ? 0 : 'initial'}
      left={alignTags === 'left' ? 0 : 'initial'}
    >
      {techs.map((tech) => (
        <Tag
          size="sm"
          key={tech}
          borderRadius="full"
          variant="outline"
          color={secondaryColor}
          boxShadow="none"
          border="solid 1px"
          borderColor={secondaryColor}
        >
          {tech}
        </Tag>
      ))}
    </HStack>
  );
};

export default ProjectTech;

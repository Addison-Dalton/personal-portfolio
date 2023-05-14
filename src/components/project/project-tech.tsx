import { Flex, Tag } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { useColor } from 'utils/hooks';

export type ProjectTechProps = {
  techs?: string[];
  alignTags?: 'left' | 'right';
};

const StyledFlex = styled(Flex)`
  li:not(:first-of-type) {
    margin-left: 1rem;
  }
`;

const ProjectTech = ({ techs, alignTags = 'right' }: ProjectTechProps) => {
  const {
    colors: [secondaryColor]
  } = useColor(['secondary']);

  if (!techs || techs.length === 0) {
    return null;
  }

  return (
    <StyledFlex
      as="ul"
      justifyContent={{ base: 'center', md: alignTags }}
      wrap="wrap"
    >
      {techs.map((tech) => (
        <Tag
          as="li"
          size="sm"
          key={tech}
          borderRadius="full"
          variant="outline"
          color={secondaryColor}
          boxShadow="none"
          border="solid 1px"
          borderColor={secondaryColor}
          marginBottom={2}
        >
          {tech}
        </Tag>
      ))}
    </StyledFlex>
  );
};

export default ProjectTech;

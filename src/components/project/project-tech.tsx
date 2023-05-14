import { Flex, Show, Hide } from '@chakra-ui/react';
import styled from '@emotion/styled';

import TagList from 'components/tag-list';

export type ProjectTechProps = {
  techs?: string[];
  alignTags?: 'left' | 'right';
};

const StyledFlex = styled(Flex)`
  li:not(:first-of-type) {
    /* margin-left: 1rem; */
  }
`;

const ProjectTech = ({ techs, alignTags = 'right' }: ProjectTechProps) => {
  if (!techs || techs.length === 0) {
    return null;
  }

  return (
    <>
      <Show above="md">
        <TagList
          items={techs}
          justifyContent={{ base: 'center', md: alignTags }}
        />
      </Show>
      <Hide above="md">
        <TagList
          items={techs}
          itemsCutoff={3}
          justifyContent={{ base: 'center', md: alignTags }}
        />
      </Hide>
    </>
  );
};

export default ProjectTech;

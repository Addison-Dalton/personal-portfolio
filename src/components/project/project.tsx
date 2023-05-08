import { Flex, Box } from '@chakra-ui/react';
import ProjectImage, { ProjectImageProps } from './project-image';
import ProjectText, { ProjectTextProps } from './project-text';
import ProjectTech, { ProjectTechProps } from './project-tech';

type Props = ProjectImageProps & ProjectTextProps & ProjectTechProps;

const Project = ({
  text,
  title,
  reverseContent,
  techs,
  ...projectImageProps
}: Props) => (
  <Flex
    justifyContent={['center', '']}
    alignItems={['', 'center']}
    wrap="wrap"
    flexDirection={reverseContent ? 'row-reverse' : 'row'}
  >
    <ProjectImage {...projectImageProps} />
    <Box flex={1} position="relative" minWidth="300px" maxWidth="500px">
      <ProjectText title={title} text={text} reverseContent={reverseContent} />
      <ProjectTech
        techs={techs}
        alignTags={reverseContent ? 'left' : 'right'}
      />
    </Box>
  </Flex>
);

export default Project;

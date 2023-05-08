import { ReactNode } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import ProjectImage, { ProjectImageProps } from './project-image';
import ProjectText, { ProjectTextProps } from './project-text';

type Props = ProjectImageProps & ProjectTextProps;

const Project = ({
  text,
  title,
  reverseContent,
  ...projectImageProps
}: Props) => (
  <Flex
    justifyContent={['center', '']}
    alignItems={['', 'center']}
    wrap="wrap"
    flexDirection={reverseContent ? 'row-reverse' : 'row'}
  >
    <ProjectImage {...projectImageProps} />
    <ProjectText title={title} text={text} reverseContent={reverseContent} />
  </Flex>
);

export default Project;

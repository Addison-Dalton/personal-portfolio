import { Flex, HStack } from '@chakra-ui/react';
import ProjectImage, { ProjectImageProps } from './project-image';
import ProjectText, { ProjectTextProps } from './project-text';
import ProjectTech, { ProjectTechProps } from './project-tech';
import ProjectLinks, { ProjectLinkProps } from './project-links';

type Props = ProjectImageProps &
  ProjectTextProps &
  ProjectTechProps &
  ProjectLinkProps;

const Project = ({ text, title, reverseContent, techs, ...props }: Props) => (
  <Flex
    justifyContent="center"
    alignItems={{ base: 'normal', md: 'center' }}
    wrap="wrap"
    flexDirection={reverseContent ? 'row-reverse' : 'row'}
  >
    <ProjectImage {...props} />
    <Flex
      flex={{ base: 'initial', md: 1 }}
      marginTop={{ base: 5, md: 0 }}
      flexDirection={{ base: 'column-reverse', md: 'column' }}
      alignItems={{ base: 'center', md: 'normal' }}
      gap={4}
      maxWidth="500px"
    >
      <ProjectText title={title} text={text} reverseContent={reverseContent} />
      <ProjectTech
        techs={techs}
        alignTags={reverseContent ? 'left' : 'right'}
      />
      <HStack
        display={{ base: 'none', md: 'flex' }}
        justifyContent={reverseContent ? 'start' : 'end'}
        gap={3}
      >
        <ProjectLinks
          githubUrl={props.githubUrl}
          projectUrl={props.projectUrl}
        />
      </HStack>
    </Flex>
  </Flex>
);

export default Project;

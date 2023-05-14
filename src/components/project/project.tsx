import { Flex, HStack, As } from '@chakra-ui/react';
import ProjectImage, { ProjectImageProps } from './project-image';
import ProjectText, { ProjectTextProps } from './project-text';
import ProjectTech, { ProjectTechProps } from './project-tech';
import ProjectLinks, { ProjectLinkProps } from './project-links';

type Props = ProjectImageProps &
  ProjectTextProps &
  ProjectTechProps &
  ProjectLinkProps & {
    as?: As;
  };

const Project = ({
  text,
  title,
  reverseContent,
  techs,
  as = 'div',
  ...props
}: Props) => (
  <Flex
    justifyContent="center"
    alignItems={{ base: 'normal', md: 'center' }}
    wrap="wrap"
    flexDirection={reverseContent ? 'row-reverse' : 'row'}
    as={as}
  >
    <ProjectImage {...props} />
    <Flex
      flex={{ base: 'initial', md: 1 }}
      marginTop={{ base: 5, md: 0 }}
      flexDirection="column"
      alignItems={{ base: 'center', md: 'normal' }}
      gap={4}
      maxWidth="500px"
    >
      <Flex
        flexDirection={{ base: 'column-reverse', md: 'column' }}
        gap={{ base: 2, md: 4 }}
      >
        <ProjectText
          title={title}
          text={text}
          reverseContent={reverseContent}
        />
        <ProjectTech
          techs={techs}
          alignTags={reverseContent ? 'left' : 'right'}
        />
      </Flex>
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

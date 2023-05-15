import {
  Flex,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text
} from '@chakra-ui/react';
import { useColor } from 'utils/hooks';

import ProjectLinks from './project-links';
import ProjectTech from './project-tech';

export type ProjectCardProps = {
  title: string;
  description: string;
  githubUrl: string;
  techs?: string[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  githubUrl,
  techs
}) => {
  const {
    colors: [primaryBgColor]
  } = useColor(['primaryBg']);

  return (
    <Card backgroundColor={primaryBgColor}>
      <CardHeader>
        <Flex gap={1} justifyContent="space-between">
          <Heading as="h5" size="md">
            {title}
          </Heading>
          <ProjectLinks githubUrl={githubUrl} />
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{description}</Text>
      </CardBody>
      <CardFooter>
        <ProjectTech techs={techs} alignTags="left" />
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

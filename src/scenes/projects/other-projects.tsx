import { Flex, Heading, Text, SimpleGrid } from '@chakra-ui/react';

import { ProjectCard, ProjectCardProps } from 'components/project';

type Props = {
  projects: ProjectCardProps[];
};

const OtherProjects: React.FC<Props> = ({ projects }) => (
  <Flex as="section" direction="column" gap={4} marginTop={10}>
    <Heading as="h4" textAlign="center">
      {"Other stuff I've built"}
    </Heading>
    <Text textAlign="center">
      {
        'These are some other projects I have done over the years. Many are just fun experiements that did not go anywhere.'
      }
    </Text>
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(280px, 1fr))"
    >
      {projects.map(({ title, description, githubUrl, techs }) => (
        <ProjectCard
          key={title}
          title={title}
          description={description}
          githubUrl={githubUrl}
          techs={techs}
        />
      ))}
    </SimpleGrid>
  </Flex>
);

export default OtherProjects;

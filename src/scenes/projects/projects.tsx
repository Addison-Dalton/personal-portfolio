import { Box, Flex, Divider } from '@chakra-ui/react';
import Project from 'components/project';

import OtherProjects from './other-projects';
import { featuredProjects, otherProjects } from 'assets/projects.json';

const Projects = () => {
  return (
    <>
      <Box as="section" marginTop={10}>
        <Flex as="ul" flexDirection="column" alignItems="center" gap="3rem">
          {featuredProjects.map(
            (
              { title, imageSrc, githubUrl, projectUrl, description, techs },
              index
            ) => (
              <>
                <Project
                  key={title}
                  as="li"
                  title={title}
                  imageSrc={imageSrc}
                  imageAlt={title}
                  githubUrl={githubUrl}
                  projectUrl={projectUrl}
                  text={description}
                  techs={techs}
                  // reverse on odd numbers
                  reverseContent={index % 2 !== 0}
                />
                <Divider key={`project-divider-${index}`} width="75%" />
              </>
            )
          )}
        </Flex>
      </Box>
      <OtherProjects projects={otherProjects} />
    </>
  );
};

export default Projects;

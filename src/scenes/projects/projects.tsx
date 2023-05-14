import { Box, Flex, Divider } from '@chakra-ui/react';
import Project from 'components/project';
import { useColor } from 'utils/hooks';

import { projects as projectData } from 'assets/projects.json';

const Projects = () => {
  const {
    colors: [secondaryColor]
  } = useColor(['secondary']);

  return (
    <Box as="section">
      {/* TODO - simple intro */}
      <Flex as="ul" flexDirection="column" alignItems="center" gap="3rem">
        {projectData.map(
          (
            { name, imageSrc, githubUrl, projectUrl, description, techs },
            index
          ) => (
            <>
              <Project
                key={name}
                as="li"
                title={name}
                imageSrc={imageSrc}
                imageAlt={name}
                githubUrl={githubUrl}
                projectUrl={projectUrl}
                text={description}
                techs={techs}
                // reverse on odd numbers
                reverseContent={index % 2 !== 0}
              />
              <Divider
                key={`project-divider-${index}`}
                width="75%"
              />
            </>
          )
        )}
      </Flex>
      {/* TODO link to github for other projects? */}
    </Box>
  );
};

export default Projects;

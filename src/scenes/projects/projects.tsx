import { Box } from '@chakra-ui/react';
import Project from 'components/project';
import { useColor } from 'utils/hooks';

import { projects as projectData } from 'assets/projects.json';

const Projects = () => {
  const {
    colors: [secondaryColor]
  } = useColor(['secondary']);

  return (
    <Box as="section">
      {projectData.map(
        (
          { name, imageSrc, githubUrl, projectUrl, description, techs },
          index
        ) => (
          <Project
            key={name}
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
        )
      )}
    </Box>
  );
};

export default Projects;

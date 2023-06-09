import { Box, Image } from '@chakra-ui/react';

import { useColor } from 'utils/hooks';
import ProjectLinks from './project-links';

export type ProjectImageProps = {
  imageSrc: string;
  imageAlt?: string;
  githubUrl?: string;
  projectUrl?: string;
};

const ProjectImage = ({
  imageSrc,
  imageAlt,
  githubUrl,
  projectUrl
}: ProjectImageProps) => {
  const {
    colors: [primaryBgColor]
  } = useColor(['primaryBg']);

  return (
    <Box rounded="md" boxShadow="dark-lg" zIndex={1}>
      <Image
        boxSize={['xs', 'sm']}
        roundedTop="md"
        roundedBottom={{ base: '', lg: 'md' }}
        src={imageSrc}
        alt={imageAlt}
      />
      <Box
        display={{ base: 'flex', md: 'none' }}
        justifyContent="center"
        gap={10}
        roundedBottom="md"
        width="100%"
        padding={1}
        paddingTop={2}
        backgroundColor={primaryBgColor}
      >
        <ProjectLinks githubUrl={githubUrl} projectUrl={projectUrl} />
      </Box>
    </Box>
  );
};

export default ProjectImage;

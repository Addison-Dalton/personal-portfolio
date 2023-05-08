import { Flex, Box, Image } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FaGithub } from 'react-icons/fa';
import styled from '@emotion/styled';

import { useColor } from 'utils/hooks';
import IconLink from 'components/icon-link';

export type ProjectImageProps = {
  imageSrc: string;
  imageAlt?: string;
  githubUrl?: string;
  projectUrl?: string;
};

const ImageContainer = styled(Box)`
  position: relative;
  overflow: hidden;
  transition: border 0.2s ease-in;

  &:hover .image-overlay {
    display: block;
    opacity: 1;
  }
`;

const ProjectImage = ({ imageSrc, imageAlt, githubUrl, projectUrl }: ProjectImageProps) => {
  const {
    colors: [primaryBgColor]
  } = useColor(['primaryBg']);

  return (
    <Box rounded="md" boxShadow="dark-lg" zIndex={1}>
      <ImageContainer
        roundedTop="md"
        roundedBottom={{ base: '', lg: 'md' }}
        boxSize={['xs', 'sm']}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          className="image-overlay"
          backgroundColor="rgba(44, 194, 159, 0.5)"
          opacity={0}
          transition="opacity 0.2s linear"
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            maxWidth="40%"
            height="100%"
            margin="auto"
          >
            {githubUrl && (
              <IconLink
                icon={FaGithub}
                href={githubUrl}
                fontSize="6xl"
                isExternal
              />
            )}
            {projectUrl && (
              <IconLink
                icon={ExternalLinkIcon}
                href={projectUrl}
                fontSize="6xl"
                isExternal
              />
            )}
          </Flex>
        </Box>
        <Image src={imageSrc} alt={imageAlt} />
      </ImageContainer>
      <Box
        display={{ base: 'flex', lg: 'none' }}
        justifyContent="center"
        gap={10}
        roundedBottom="md"
        width="100%"
        padding={1}
        paddingTop={2}
        backgroundColor={primaryBgColor}
      >
        {/* TODO - link color against background not great in light mode */}
        {githubUrl && (
          <IconLink
            icon={FaGithub}
            href={githubUrl}
            fontSize="3xl"
            isExternal
          />
        )}
        {projectUrl && (
          <IconLink
            icon={ExternalLinkIcon}
            href={projectUrl}
            fontSize="3xl"
            isExternal
          />
        )}
      </Box>
    </Box>
  );
};

export default ProjectImage;

import { Text, Flex, Box, Image, Link, Icon } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import styled from '@emotion/styled';
import { Link as RRLink } from 'react-router-dom';
import { MdPalette } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

import { useColor } from 'utils/hooks';
import Section from 'components/section';
import IconLink from 'components/icon-link';

const ImageContainer = styled(Box)`
  position: relative;
  overflow: hidden;
  transition: border 0.2s ease-in;

  &:hover .image-overlay {
    display: block;
    opacity: 1;
  }
`;

const LandingProjects = () => {
  const {
    colors: [primaryBgColor, secondaryColor]
  } = useColor(['primaryBg', 'secondary']);

  return (
    <Section
      title="Check out my work"
      variant="link"
      href="/projects"
      icon={MdPalette}
    >
      <Flex
        justifyContent={['center', '']}
        alignItems={['', 'center']}
        gap={12}
        wrap="wrap"
      >
        {/* TODO - extract image stuff to component */}
        <Box rounded="md" boxShadow="dark-lg">
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
                <IconLink
                  icon={FaGithub}
                  href="https://github.com/Addison-Dalton/pokedexle"
                  fontSize="6xl"
                  isExternal
                />
                <IconLink
                  icon={ExternalLinkIcon}
                  href="https://pokedexle.app"
                  fontSize="6xl"
                  isExternal
                />
              </Flex>
            </Box>
            <Image src="/pokedexle.png" alt="Pokedexle" />
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
            <IconLink
              icon={FaGithub}
              href="https://github.com/Addison-Dalton/pokedexle"
              fontSize="3xl"
              isExternal
            />
            <IconLink
              icon={ExternalLinkIcon}
              href="https://pokedexle.app"
              fontSize="3xl"
              isExternal
            />
          </Box>
        </Box>
        <Text fontSize="lg" minWidth="300px" maxWidth="500px" flex={1}>
          {
            'Pokédexle is one of my favorite projects. I, like many, got caught up in the Wordle craze of early 2022. I decided to combine that with my love of Pokémon, and Pokédexle is the result! You can checkout my other work '
          }
          {/* TODO - on light mode, this text is too light (may need to be darker) */}
          <Link as={RRLink} to="/projects" color={secondaryColor}>
            {'here'}
          </Link>
          {'.'}
        </Text>
      </Flex>
    </Section>
  );
};

export default LandingProjects;

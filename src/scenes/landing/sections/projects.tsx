import { Text, Flex, Link } from '@chakra-ui/react';
import { Link as RRLink } from 'react-router-dom';
import { MdPalette } from 'react-icons/md';

import { useColor } from 'utils/hooks';
import Section from 'components/section';
import ProjectImage from 'components/project-image';

const LandingProjects = () => {
  const {
    colors: [secondaryColor]
  } = useColor(['secondary']);

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
        <ProjectImage
          imageSrc="/pokedexle.png"
          imageAlt="pokedexle"
          githubUrl="https://github.com/Addison-Dalton/pokedexle"
          projectUrl="https://pokedexle.app"
        />
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

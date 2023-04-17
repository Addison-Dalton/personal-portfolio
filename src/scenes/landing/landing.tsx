import { Text, Flex } from '@chakra-ui/react';
import { MdPerson } from 'react-icons/md';

import Section from 'components/section';
import LandingProjects from './sections/projects';
const Landing = () => {
  const introText =
    "I'm a software engineer with a love for web development and a passion for all things code. When I'm not crafting solutions to complex problems, you can find me enjoying in a few of my favorite pastimes: baking up a storm, hitting the pavement for a run, or losing myself in a video game. Oh, and did I mention I have two adorable corgis who keep me on my toes? So, let's dive into what I've been working on lately!";
  return (
    <Flex direction="column" alignItems={{ base: 'center', md: 'start' }}>
      {/* Intro */}
      <Section
        title="Hi, I'm Addison"
        variant="link"
        href="/about"
        icon={MdPerson}
      >
        <Text fontSize="lg" maxWidth="600px">
          {introText}
        </Text>
      </Section>
      {/* Projects */}
      <LandingProjects />
    </Flex>
  );
};
export default Landing;

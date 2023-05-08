import { Text, Flex } from '@chakra-ui/react';
import { MdPerson } from 'react-icons/md';
import { IoMdBriefcase } from 'react-icons/io';

import Section from 'components/section';
import Hero from './hero';
import LandingProjects from './sections/projects';
const Landing = () => {
  const introText =
    "I'm a software engineer with a love for web development and a passion for all things code. When I'm not crafting solutions to complex problems, you can find me enjoying in a few of my favorite pastimes: baking up a storm, hitting the pavement for a run, or losing myself in a video game. Oh, and did I mention I have two adorable corgis who keep me on my toes? So, let's dive into what I've been working on lately!";

  const experienceText =
    "I'm currently a Senior Software Engineer at Ozmo! I am responsible for planning, building, and maintaining features for an internal tool. I am also adept at handling production issues as they arise, ensuring smooth operations and minimizing downtime. With expertise in TypeScript and React for frontend development, as well as Ruby on Rails for backend development, I bring a wealth of technical knowledge and experience to my role.";

  return (
    // TODO - might move these styles to the <main> element
    <Flex
      direction="column"
      alignItems={{ base: 'center', md: 'start' }}
      marginTop={10}
    >
      <Hero />
      {/* Intro */}
      <Section title="About me" variant="link" href="/about" icon={MdPerson}>
        <Text fontSize="lg" maxWidth="600px">
          {introText}
        </Text>
      </Section>
      {/* Projects */}
      <LandingProjects />
      {/* Experience */}
      <Section
        title="Experience"
        variant="link"
        href="/work"
        icon={IoMdBriefcase}
      >
        <Text fontSize="lg" maxWidth="600px">
          {experienceText}
        </Text>
      </Section>
    </Flex>
  );
};
export default Landing;

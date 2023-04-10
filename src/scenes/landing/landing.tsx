import { Text } from '@chakra-ui/react';
import { MdPerson, MdPalette } from 'react-icons/md';
import { GiPalette } from 'react-icons/gi';
import Section from 'components/section';
const Landing = () => {
  const introText =
    "I'm a software engineer with a love for web development and a passion for all things code. When I'm not crafting solutions to complex problems, you can find me indulging in a few of my favorite pastimes: baking up a storm, hitting the pavement for a run, or losing myself in a video game. Oh, and did I mention I have two adorable corgis who keep me on my toes? So, let's dive into what I've been working on lately!";
  return (
    <>
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
      <Section
        title="My creations!"
        variant="link"
        href="/projects"
        icon={MdPalette}
      >
        <Text fontSize="lg" maxWidth="600px">
          {
            "I'd like to show a tile of my latest project here. This probably means I should create a JSON or something to hold project data, and I'll show the most recent. Below that just some generic info about what I like to work on"
          }
        </Text>
      </Section>
    </>
  );
};
export default Landing;

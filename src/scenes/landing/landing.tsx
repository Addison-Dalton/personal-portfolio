import { Icon, Divider } from '@chakra-ui/react';
import { MdPerson } from 'react-icons/md';
import Section from 'components/section';
const Landing = () => {
  return (
    <>
      {/* Intro */}
      <Section title="Hi, I'm Addison" icon={MdPerson}>
        {
          "I'll put boring stuff about me here. Hobbies, work, projects. Yeah, pretty generic"
        }
      </Section>
    </>
  );
};
export default Landing;

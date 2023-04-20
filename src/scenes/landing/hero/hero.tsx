import { Text, Heading, Box, Flex } from '@chakra-ui/react';
import { useColor } from 'utils/hooks';

const Hero = () => {
  const {
    colors: [secondaryColor],
    isDark
  } = useColor(['secondary']);

  return (
    <Flex
      as="section"
      margin="0 auto"
      marginBottom="10rem"
      direction="column"
      alignItems="center"
    >
      <Heading as="h1" size="md" color={secondaryColor} marginBottom={6}>
        {'Hi, my name is'}
      </Heading>
      <Heading size={['xl', '3xl']} marginBottom={3}>
        {'Addison Dalton'}
      </Heading>
      <Heading
        as="h3"
        size={['lg', 'xl']}
        color={isDark ? 'gray.400' : 'gray.500'}
      >
        {'Developer • Baker • Gamer'}
      </Heading>
    </Flex>
  );
};
export default Hero;

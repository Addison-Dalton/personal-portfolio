import { ReactNode } from 'react';
import { Box, Heading, Icon, Divider, useColorMode } from '@chakra-ui/react';
import { IconType } from 'react-icons';

type Props = {
  title: string;
  icon?: IconType;
  showDivider?: boolean;
  children: ReactNode;
};

const Section = ({ title, icon, showDivider = true, children }: Props) => {
  const { colorMode } = useColorMode();
  const color = colorMode === 'dark' ? 'secondary.dark' : 'secondary.light';
  return (
    <Box as="article">
      <Heading
        as="h1"
        size="lg"
        display="flex"
        width="fit-content"
        alignItems="center"
        textDecoration="underline"
        textDecorationColor={color}
      >
        <Icon fontSize="5xl" color={color} as={icon} />
        {title}
      </Heading>
      {children}
      <Divider margin="1rem 0" />
    </Box>
  );
};

export default Section;

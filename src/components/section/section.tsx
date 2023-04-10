import { ReactNode } from 'react';
import { Box, Heading, Icon, Divider } from '@chakra-ui/react';
import { useColor } from 'utils/hooks';
import { IconType } from 'react-icons';

type Props = {
  title: string;
  icon?: IconType;
  showDivider?: boolean;
  children: ReactNode;
};

const Section = ({ title, icon, showDivider = true, children }: Props) => {
  const color = useColor('secondary');
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

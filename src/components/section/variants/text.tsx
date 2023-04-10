import { useMemo } from 'react';
import { Icon } from '@chakra-ui/react';
import { useColor } from 'utils/hooks';
import BaseSection, { StyledHeading, SectionProps } from './base';

const TextSection = ({ children, icon, title, ...props }: SectionProps) => {
  const { color: secondaryColor } = useColor('secondary');
  const header = useMemo(
    () => (
      <StyledHeading
        as="h1"
        size="lg"
        textDecoration="underline"
        textDecorationColor={secondaryColor}
      >
        <Icon fontSize="5xl" color={secondaryColor} as={icon} />
        {title}
      </StyledHeading>
    ),
    [secondaryColor, title, icon]
  );
  return (
    <BaseSection header={header} {...props}>
      {children}
    </BaseSection>
  );
};

export default TextSection;

import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@chakra-ui/react';
import { useColor } from 'utils/hooks';
import BaseSection, { StyledHeading, SectionProps } from './base';

const TextSection = ({
  children,
  icon,
  title,
  href,
  ...props
}: SectionProps) => {
  const {
    colors: [primaryColor, secondaryColor],
    isDark
  } = useColor(['primary', 'secondary']);
  const header = useMemo(
    () => (
      <Link to={href || '/'}>
        <StyledHeading
          as="h1"
          size="lg"
          textDecoration="underline"
          textDecorationColor={secondaryColor}
          className={`as-link ${isDark ? 'color-dark' : 'color-light'}`}
          _hover={{ color: primaryColor, transition: 'color 0.2s ease' }}
        >
          <Icon fontSize="5xl" color={secondaryColor} as={icon} />
          {title}
        </StyledHeading>
      </Link>
    ),
    [primaryColor, isDark, secondaryColor, title, href, icon]
  );
  return (
    <BaseSection header={header} {...props}>
      {children}
    </BaseSection>
  );
};

export default TextSection;

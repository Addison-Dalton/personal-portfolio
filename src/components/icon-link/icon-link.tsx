import { Link, Icon, IconProps, As } from '@chakra-ui/react';

type Props = IconProps & {
  icon: As;
  href: string;
  isExternal?: boolean;
};

const IconLink = ({
  icon,
  href,
  isExternal,
  color = 'white',
  ...props
}: Props) => (
  <Link href={href} isExternal={isExternal}>
    <Icon
      as={icon}
      color={color}
      transform="scale(1)"
      transformOrigin="center"
      transition="transform 0.2s ease-in"
      _hover={{ transform: 'scale(1.2)' }}
      {...props}
    />
  </Link>
);

export default IconLink;

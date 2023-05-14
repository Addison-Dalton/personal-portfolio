import { ReactNode } from 'react';
import { Link, LinkProps } from '@chakra-ui/react';
import { Link as RRLink, useLocation } from 'react-router-dom';

import { useColor } from 'utils/hooks';

type Props = LinkProps & {
  to: string;
  children: ReactNode;
};

const NavLink: React.FC<Props> = ({ to, children, ...linkProps }) => {
  const {
    colors: [secondaryColor]
  } = useColor(['secondary']);

  const { pathname } = useLocation();

  const isActive = to === pathname;

  const activeStyleProps: LinkProps = isActive
    ? {
        fontWeight: 'bold',
        borderColor: `${secondaryColor} !important`
      }
    : { borderColor: 'transparent !important' };

  return (
    <Link
      {...activeStyleProps}
      {...linkProps}
      textDecoration="none !important"
      borderBottom="2px solid"
      as={RRLink}
      to={to}
    >
      {children}
    </Link>
  );
};

export default NavLink;

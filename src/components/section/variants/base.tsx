import { ReactNode } from 'react';
import { To } from 'react-router-dom';
import { IconType } from 'react-icons';
import styled from '@emotion/styled';
import { Box, Heading, Icon, Divider } from '@chakra-ui/react';

export type SectionProps = {
  title: string;
  children: ReactNode;
  icon?: IconType;
  showDivider?: boolean;
  href?: To;
};

type Props = Pick<SectionProps, 'showDivider' | 'children'> & {
  header: ReactNode;
};

export const StyledHeading = styled(Heading)`
  display: flex;
  position: relative;
  width: fit-content;
  align-items: center;
  gap: 0.75rem;

  &.as-link:after {
    content: '\\2192';
    font-size: 1em;
    opacity: 0;
    position: absolute;
    bottom: -7px;
    right: 0;
    overflow: hidden;

    transition: transform 0.2s ease, opacity 0.2s ease;

    @media screen and (max-width: ${({ theme }: any) => theme.breakpoints.md}) {
      font-size: 0.8em;
      bottom: 1px;
      right: 6px;
    }
  }

  &:hover:after {
    opacity: 1;
    transform: translateX(1.25rem);
  }

  &.color-dark:after {
    color: ${({ theme }: any) => theme.colors.secondary.dark};
  }
  &.color-light:after {
    color: ${({ theme }: any) => theme.colors.secondary.light};
  }
`;

const BaseSection = ({ header, children, showDivider = true }: Props) => (
  <Box as="article" maxWidth={['480xp', '600px', '900px', '1280px']}>
    {header}
    <Box padding="0.5rem">{children}</Box>
    {showDivider && <Divider margin="1rem 0" />}
  </Box>
);

export default BaseSection;

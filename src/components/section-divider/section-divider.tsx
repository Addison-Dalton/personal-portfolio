import styled from '@emotion/styled';
import { Theme } from '@chakra-ui/react';

const Wrapper = styled('div')`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 100px;
  }

  .shape-fill {
    /* emotion has access to chakra's theme, just not typed as such */
    fill: ${({ theme }: any) => theme.colors.blue['100']};
  }
`;

const SectionDivider = () => {
  return (
    <Wrapper>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 0L0 0 892.25 114.72 1200 0z"
          className="shape-fill"
        ></path>
      </svg>
    </Wrapper>
  );
};

export default SectionDivider;

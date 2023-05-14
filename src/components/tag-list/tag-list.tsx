import { useState } from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';
import styled from '@emotion/styled';

import Tag from 'components/tag';
import TagToggle from './tag-toggle';

type Props = {
  items: string[];
  itemsCutoff?: number;
  justifyContent?: FlexProps['justifyContent'];
};

const StyledFlex = styled(Flex)`
  /* Rendering the Tags as "li" is not respecting their size setting. Manually setting it here. */
  li {
    max-height: 20px;
  }
`;

const TagList: React.FC<Props> = ({
  items,
  itemsCutoff = items.length,
  justifyContent
}) => {
  const [showMore, setShowMore] = useState(false);

  if (!items || items.length === 0) {
    return null;
  }

  const primaryItems = items.slice(0, itemsCutoff);
  const additionalItems = items.slice(itemsCutoff);

  return (
    <StyledFlex as="ul" wrap="wrap" gap={2} justifyContent={justifyContent}>
      {primaryItems.map((item) => (
        <>
          <Tag key={`primary-${item}`} as="li">
            {item}
          </Tag>
        </>
      ))}
      {showMore &&
        additionalItems.map((item) => (
          <Tag key={`additional-${item}`} as="li">
            {item}
          </Tag>
        ))}
      {itemsCutoff < items.length && (
        <TagToggle
          showMore={showMore}
          onToggle={() => setShowMore((currentState) => !currentState)}
        />
      )}
    </StyledFlex>
  );
};

export default TagList;

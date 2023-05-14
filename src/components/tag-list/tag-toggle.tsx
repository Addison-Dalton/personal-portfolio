import { TagLeftIcon, TagLabel } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

import Tag from 'components/tag';

type Props = {
  showMore: boolean;
  onToggle: () => void;
};

const TagToggle: React.FC<Props> = ({ showMore, onToggle }) => (
  <li style={{ listStyleType: 'none' }}>
    <Tag as="button" onClick={onToggle}>
      <TagLeftIcon boxSize="1em" as={showMore ? MinusIcon : AddIcon} />
      <TagLabel>{showMore ? 'Show fewer' : 'Show more'}</TagLabel>
    </Tag>
  </li>
);

export default TagToggle;

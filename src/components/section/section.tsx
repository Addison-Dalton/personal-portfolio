import { TextSection, LinkSection, SectionProps } from './variants';

type Props = SectionProps & {
  variant?: 'text' | 'link';
};

const Section = ({ variant = 'text', ...props }: Props) => {
  switch (variant) {
    case 'link':
      return <LinkSection {...props} />;
    case 'text':
      return <TextSection {...props} />;
    default:
      return null;
  }
};

export default Section;

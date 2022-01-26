import SectionTitle, { Props as TitlePropType } from './atoms/SectionTitle';

type Props = TitlePropType & {
  children: React.ReactElement;
};

export default function TitledContent({ children, ...titleProps }: Props) {
  return (
    <>
      <SectionTitle {...titleProps} />
      {children}
    </>
  );
}

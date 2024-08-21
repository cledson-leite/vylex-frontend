type TitleProps = {
  title: string;
};

export default function TitleMolecule({ title }: TitleProps) {
  return <h1 className="title">{title}</h1>;
}

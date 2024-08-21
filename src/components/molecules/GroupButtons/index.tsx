import './group_buttons_molecule.sass';

type GroupButtons = {
  children?: React.ReactNode;
};

export default function GroupButtonsMolecule({ children }: GroupButtons) {
  if (!children) return null;
  return <div className="titleButtons">{children}</div>;
}

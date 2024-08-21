import { DeleteButton, EditButton } from '@/components/atoms/Button';
import GroupButtonsMolecule from '../GroupButtons';
import './list_item_molecule.sass';

type ListItemProps = {
  name: string;
};

export default function ListItemMolecule({ name }: ListItemProps) {
  return (
    <li className="listItem">
      <p>{name}</p>
      <GroupButtonsMolecule>
        <EditButton disabled />
        <DeleteButton />
      </GroupButtonsMolecule>
    </li>
  );
}

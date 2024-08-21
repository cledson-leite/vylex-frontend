import { ListProducts } from '@/shared/dto';
import ListItemMolecule from '../ListItem';
import './list_molecule.sass';

type ListProps = {
  products: ListProducts;
};

export default function ListMolecule({ products }: ListProps) {
  return (
    <ul className="list">
      {products.items.map((product, index) => (
        <ListItemMolecule name={product.name} key={index} />
      ))}
    </ul>
  );
}

import { AddButton } from '@/components/atoms/Button';
import HeaderOrganism from '@/components/organisms/Header';
import ListOrganism from '@/components/organisms/ProductList';
export default function ProductTemplate() {
  return (
    <>
      <HeaderOrganism title="Lista de Produtos">
        <AddButton />
      </HeaderOrganism>
      <ListOrganism />
    </>
  );
}

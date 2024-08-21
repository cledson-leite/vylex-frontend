import ListMolecule from '@/components/molecules/List';
import PaginationMolecule from '@/components/molecules/Pagination';
import { ListProducts } from '@/shared/dto';
import { faker } from '@faker-js/faker';
import './product_list.sass';

export default function ListOrganism() {
  const products: ListProducts = {
    items: [
      {
        name: faker.commerce.productName(),
        quantity: faker.number.int({ min: 1, max: 100 }),
        price: Number(faker.commerce.price()),
      },
      {
        name: faker.commerce.productName(),
        quantity: faker.number.int({ min: 1, max: 100 }),
        price: Number(faker.commerce.price()),
      },
    ],
    meta: {
      totalItems: faker.number.int({ min: 1, max: 100 }),
      itemCount: faker.number.int({ min: 1, max: 100 }),
      itemsPerPage: faker.number.int({ min: 1, max: 100 }),
      totalPages: faker.number.int({ min: 1, max: 100 }),
      currentPage: 3,
    },
  };
  return (
    <main className="main">
      <ListMolecule products={products} />
      <PaginationMolecule pagination={products.meta!} />
    </main>
  );
}

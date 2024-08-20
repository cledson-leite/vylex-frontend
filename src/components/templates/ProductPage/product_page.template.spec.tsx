/* eslint-disable prettier/prettier */
import React from 'react';
import { faker } from '@faker-js/faker';
import { fireEvent, render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import ProductTemplate from '.';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Product Template', () => {
  const productsMock = [
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
  ];
  const onDeleteMock = jest.fn();
  const push = jest.fn();
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push,
    });
    render(<ProductTemplate products={productsMock} onDelete={onDeleteMock} />);
  });

  it('should have a title "Lista de Produto"', () => {
    const title = screen.getByText('Lista de Produtos').closest('h1');
    expect(title).toBeInTheDocument();
  });
  it('should call route "new" when clicking on "Adicionar Produto" button', () => {
    fireEvent.click(screen.getByText('Adicionar Produto'));
    expect(push).toHaveBeenCalledWith('/products/new');
  });
  it('should have a list of products', () => {
    const listItens = screen.getAllByRole('listitem');
    expect(listItens).toHaveLength(productsMock.length);
  });
  it('should have product name, detail button, delete button', () => {
    productsMock.forEach((product, index) => {
      const name = screen.getByText(product.name);
      const detailButton = screen.getAllByText('Details')[index].closest('button');
      const deleteButton = screen.getAllByText('Delete')[index].closest('button');;
      expect(name).toBeInTheDocument();
      expect(detailButton).toBeInTheDocument();
      expect(deleteButton).toBeInTheDocument();
    });
  });
  it('should call the "details" route when clicking the "Details" button', () => {
    productsMock.forEach((product, index) => {
      fireEvent.click(screen.getAllByText('Details')[index]);
      expect(push).toHaveBeenCalledWith(`/products/${product.name}`);
    });
  });
  it('should call the "onDelete" when clicking the "Delete" button', () => {
    productsMock.forEach((product, index) => {
      fireEvent.click(screen.getAllByText('Delete')[index]);
      expect(onDeleteMock).toHaveBeenCalledWith(product.name);
    });
  });
});

/* eslint-disable prettier/prettier */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import { IProductViewModel } from '@/view_model/product_view_model';
import ProductPage from './page';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
describe('ProductPage', () => {
  const push = jest.fn();
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
  let viewModel: IProductViewModel;
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push,
    });
    viewModel = {
      loadProducts: jest.fn(),
      getProducts: jest.fn(),
      deleteProduct: jest.fn(),
    };
    jest.spyOn(viewModel, 'getProducts').mockReturnValue(productsMock);
    render(<ProductPage viewModel={viewModel} />);
  });
  it('should renders ProductTemplate with correct products and delete function', async () => {
    await waitFor(() => {
      expect(viewModel.loadProducts).toHaveBeenCalled();
    });
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();

    productsMock.forEach((product) => {
      const listItem = screen.getByText(product.name).closest('li');
      expect(listItem).toBeInTheDocument();
    });
  });
});

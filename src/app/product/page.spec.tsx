/* eslint-disable prettier/prettier */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import { IProductViewModel } from '@/view_model/product_view_model';
import ProductPage from './page';

describe('ProductPage', () => {
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
    viewModel = {
      loadProducts: jest.fn(),
      getProducts: jest.fn(),
    };
    jest.spyOn(viewModel, 'getProducts').mockReturnValue(productsMock);
    render(<ProductPage viewModel={viewModel} />);
  });
  it('should renders the product list correctly', async () => {
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

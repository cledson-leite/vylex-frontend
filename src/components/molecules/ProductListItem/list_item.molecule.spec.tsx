/* eslint-disable prettier/prettier */
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import ListItem from ".";
import { IProductViewModel } from "@/view_model/product_view_model";
import { useRouter } from "next/router";

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
  }));

describe('ListItem', () => {
    const push = jest.fn();
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
    jest.spyOn(viewModel, 'deleteProduct').mockReturnValue(Promise.resolve());
  });
    it('should renders the product name and both buttons correctly', () => {
      const productName = 'Product 1';
  
      render(
        <ListItem
          name={productName}
          viewModel={viewModel}
        />
      );
      const nameElement = screen.getByText(productName);
      expect(nameElement).toBeInTheDocument();
  
      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(2); 

      const detailButton = buttons[0];
      fireEvent.click(detailButton);
      expect(push).toHaveBeenCalledWith(`/products/${productName}`);
      const deleteButton = buttons[1];
      fireEvent.click(deleteButton);
      expect(viewModel.deleteProduct).toHaveBeenCalledWith(productName);
    });
  });
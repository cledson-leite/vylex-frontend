/* eslint-disable prettier/prettier */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import Head from '.';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Head Molecule', () => {
  const push = jest.fn();
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push,
    });
  });
  it('should renders the title and button with the correct text', () => {
    const titleText = 'Product List';
    render(<Head title={titleText} hasButton />);
    const titleElement = screen.getByText(titleText);
    expect(titleElement).toBeInTheDocument();
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
  it('should renders without the button', () => {
    const titleText = 'Product List';
    render(<Head title={titleText} />);
    const buttonElement = screen.queryByRole('button');
    expect(buttonElement).not.toBeInTheDocument();
  });
});

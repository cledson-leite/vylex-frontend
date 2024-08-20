/* eslint-disable prettier/prettier */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from '.';

describe('Input', () => {
  it('should renders input with placeholder', () => {
    render(<Input placeholder="PlaceHolder" value="'" onChange={() => {}} />);

    expect(screen.getByPlaceholderText('PlaceHolder')).toBeInTheDocument();
  });

  it('should renders input with correct value', () => {
    render(<Input placeholder="" value="Valor teste" onChange={() => {}} />);
    expect(screen.getByDisplayValue('Valor teste')).toBeInTheDocument();
  });

  it('should calls onChange when input value changes', () => {
    const handleChange = jest.fn();
    render(<Input placeholder="" value="" onChange={handleChange} />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Novo valor' },
    });
    expect(handleChange).toHaveBeenCalledWith('Novo valor' );
  });
});

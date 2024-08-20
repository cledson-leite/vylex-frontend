/* eslint-disable prettier/prettier */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { FaSquarePlus } from 'react-icons/fa6';
import Button from '.';

describe('IconButton', () => {
    const handleClick = jest.fn();
  beforeEach(() => {
    render(<Button icon={<FaSquarePlus />} onclick={handleClick} />);
  });
  it('should renders the button', () => {
    const button = screen.getByRole('button');
    const icon = button.firstChild;
    expect(icon?.nodeName).toBe('svg');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

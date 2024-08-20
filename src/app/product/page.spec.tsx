import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from './page';

describe('HomePage', () => {
  test('deve renderizar o título principal', () => {
    render(<HomePage />);
    const mainHeading = screen.getByRole('heading', {
      name: /My Responsive Page/i,
    });
    expect(mainHeading).toBeInTheDocument();
  });

  test('deve renderizar os títulos das seções', () => {
    render(<HomePage />);
    const sectionHeadings = screen.getAllByRole('heading', { level: 2 });
    expect(sectionHeadings.length).toBe(2);
    expect(sectionHeadings[0]).toHaveTextContent(/Section Title/i);
    expect(sectionHeadings[1]).toHaveTextContent(/Another Section/i);
  });

  test('deve renderizar o conteúdo das seções', () => {
    render(<HomePage />);
    const sectionParagraphs = screen.getAllByText(/Lorem ipsum/i);
    expect(sectionParagraphs.length).toBeGreaterThan(0);
  });

  test('deve renderizar o rodapé', () => {
    render(<HomePage />);
    const footer = screen.getByText(/© 2024 My Website/i);
    expect(footer).toBeInTheDocument();
  });
});

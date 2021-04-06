import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app heading correctly', () => {
  render(<App />);
  const header = screen.getByRole('heading', { name: /currency convertor/i });
  expect(header).toBeInTheDocument();
});

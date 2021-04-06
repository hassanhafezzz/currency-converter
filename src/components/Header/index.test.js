import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';

test('header has app logo', () => {
  render(<Header />);
  const logo = screen.getByAltText(/logo/i);
  expect(logo).toBeInTheDocument();
});

test('add snapshot for header ', () => {
  const { container, asFragment } = render(<Header />);
  expect(asFragment(container)).toMatchSnapshot();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorMessage from './index';
import user from '@testing-library/user-event';

test('Error displayed correctly and close button is clickable', async () => {
  const message = 'error message';
  const mockClose = jest.fn();
  render(<ErrorMessage dismissMessage={mockClose}>{message}</ErrorMessage>);
  expect(screen.getByText(message)).toBeInTheDocument();

  user.click(await screen.findByText(/close/i));

  expect(mockClose).toHaveBeenCalledTimes(1);
});

test('Add snapshot for error messages ', () => {
  const { container, asFragment } = render(<ErrorMessage />);
  expect(asFragment(container)).toMatchSnapshot();
});

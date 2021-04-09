import React from 'react';
import { render, screen, findByText, fireEvent } from '@testing-library/react';
import user from '@testing-library/user-event';
import Converter from './index';
import { fetchLatestRates } from '../../api';
import { latest as latestMock } from '../../dataMock';

jest.mock('../../api');

afterEach(() => {
  jest.clearAllMocks();
});

test('Converter renders with four inputs', async () => {
  render(<Converter />);

  const fromField = await screen.findByLabelText(/from amount field/i);
  expect(fromField).toHaveProperty('type', 'number');
  expect(fromField).toHaveValue(1);

  const toField = await screen.findByLabelText(/to amount field/i);
  expect(toField).toHaveProperty('type', 'number');
  expect(toField).toHaveValue(1);

  const fromCurrencyField = await screen.findByLabelText(/from currency type/i);
  expect(fromCurrencyField).toBeInTheDocument();

  const toCurrencyField = await screen.findByLabelText(/to currency type/i);
  expect(toCurrencyField).toBeInTheDocument();
});

test('Form currency selector has the base currency selected', async () => {
  fetchLatestRates.mockResolvedValueOnce({ data: latestMock });
  const { base } = latestMock;

  render(<Converter />);
  expect(fetchLatestRates).toHaveBeenCalledTimes(1);
  expect(fetchLatestRates).toHaveBeenCalledWith();

  const fromSelectContainer = screen.getByTestId('from-currency-select');
  expect(
    await findByText(fromSelectContainer, new RegExp(base, 'i')),
  ).toBeInTheDocument();
});

test('To currency selector has the first currency from rates selected', async () => {
  fetchLatestRates.mockResolvedValueOnce({ data: latestMock });
  const { rates } = latestMock;
  const firstCurrency = Object.keys(rates)[0];

  render(<Converter />);

  const toSelectContainer = screen.getByTestId('to-currency-select');
  expect(
    await findByText(toSelectContainer, new RegExp(firstCurrency, 'i')),
  ).toBeInTheDocument();
});

test('From currency changes on select with one of the returned currencies', async () => {
  fetchLatestRates.mockResolvedValueOnce({ data: latestMock });
  const { base } = latestMock;

  render(<Converter />);
  expect(fetchLatestRates).toHaveBeenCalledTimes(1);
  expect(fetchLatestRates).toHaveBeenCalledWith();

  const fromSelectContainer = screen.getByTestId('from-currency-select');
  const SelectedValue = await findByText(
    fromSelectContainer,
    new RegExp(base, 'i'),
  );

  user.type(SelectedValue, '{arrowdown}');
  user.click(await findByText(fromSelectContainer, /egp/i));
  expect(await findByText(fromSelectContainer, /egp/i)).toBeInTheDocument();
});

test('To currency changes on select with one of the returned currencies', async () => {
  fetchLatestRates.mockResolvedValueOnce({ data: latestMock });
  const { rates } = latestMock;
  const firstCurrency = Object.keys(rates)[0];

  render(<Converter />);

  const toSelectContainer = screen.getByTestId('to-currency-select');
  const SelectedValue = await findByText(
    toSelectContainer,
    new RegExp(firstCurrency, 'i'),
  );

  user.type(SelectedValue, '{arrowdown}');
  user.click(await findByText(toSelectContainer, /egp/i));
  expect(await findByText(toSelectContainer, /egp/i)).toBeInTheDocument();
});

test('Changing in the first input (from) changes the second input (to) with the right values', async () => {
  fetchLatestRates.mockResolvedValueOnce({ data: latestMock });
  const { rates } = latestMock;
  const amount = 10;
  const toCurrency = Object.keys(rates)[0];
  render(<Converter />);

  const fromField = await screen.findByLabelText(/from amount field/i);
  const toField = await screen.findByLabelText(/to amount field/i);

  fireEvent.change(fromField, { target: { value: amount } });
  expect(toField).toHaveValue(Number((amount * rates[toCurrency]).toFixed(2)));
});

test('Changing in the second input (to) changes the first input (from) with the right values', async () => {
  fetchLatestRates.mockResolvedValueOnce({ data: latestMock });
  const { rates } = latestMock;
  const toCurrency = Object.keys(rates)[0];
  const amount = 10;
  render(<Converter />);

  const fromField = await screen.findByLabelText(/from amount field/i);
  const toField = await screen.findByLabelText(/to amount field/i);

  fireEvent.change(toField, { target: { value: amount } });
  expect(fromField).toHaveValue(
    Number((amount / rates[toCurrency]).toFixed(2)),
  );
});

test('Bidirectional Changes', async () => {
  fetchLatestRates.mockResolvedValueOnce({ data: latestMock });
  const { rates } = latestMock;
  const toCurrency = Object.keys(rates)[0];
  const firstAmount = 10;
  const secondAmount = 50;
  render(<Converter />);

  const fromField = await screen.findByLabelText(/from amount field/i);
  const toField = await screen.findByLabelText(/to amount field/i);

  fireEvent.change(fromField, { target: { value: firstAmount } });
  expect(toField).toHaveValue(
    Number((firstAmount * rates[toCurrency]).toFixed(2)),
  );
  fireEvent.change(toField, { target: { value: secondAmount } });
  expect(fromField).toHaveValue(
    Number((secondAmount / rates[toCurrency]).toFixed(2)),
  );
});

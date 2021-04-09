import {
  getFlagFromCurrencyCode,
  getCurrencyNameFromCurrencyCode,
  getNewToAmount,
  getNewFromAmount,
  calcNewRates,
} from './index';

it('should return correct flag for currency', () => {
  expect(getFlagFromCurrencyCode('')).toEqual('💵');
  expect(getFlagFromCurrencyCode('EGP')).toEqual('🇪🇬');
  expect(getFlagFromCurrencyCode('EUR')).toEqual('🇪🇺');
  expect(getFlagFromCurrencyCode('USD')).toEqual('🇺🇸');
});

it('should return correct currency name for currency code', () => {
  expect(getCurrencyNameFromCurrencyCode('')).toEqual('');
  expect(getCurrencyNameFromCurrencyCode('EGP')).toEqual('Egyptian Pound');
  expect(getCurrencyNameFromCurrencyCode('EUR')).toEqual('Euro');
  expect(getCurrencyNameFromCurrencyCode('USD')).toEqual('US Dollar');
});

it('should return the right to amount from exchange rate (to amount)', () => {
  expect(getNewToAmount(0, 0)).toEqual(0);
  expect(getNewToAmount(5, 2)).toEqual(10.0);
  expect(getNewToAmount(5.51, 2.2)).toEqual(12.12);
});

it('should return the right to amount from exchange rate (from amount)', () => {
  expect(getNewFromAmount(0, 0)).toEqual(0);
  expect(getNewFromAmount(5, 2)).toEqual(2.5);
  expect(getNewFromAmount(5.51, 2.2)).toEqual(2.5);
  expect(getNewFromAmount(12.544, 4.62)).toEqual(2.72);
  expect(getNewFromAmount(2.544, 14.62)).toEqual(0.17);
});

it('should calculate new rate based on a convertor', () => {
  const oldRates = {
    USD: 1.187514,
    CAD: 1.4967,
    EUR: 1,
  };
  const calculated = calcNewRates(oldRates, 1.24);
  const result = { CAD: 1.207016, EUR: 0.806452, USD: 0.957673 };
  expect(Object.keys(calculated).length).toEqual(3);
  expect(calculated).toEqual(result);
});

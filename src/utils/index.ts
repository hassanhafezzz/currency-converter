import { flag } from 'country-emoji';
import currencyMap from './currencyMap';
import { Rates } from '../components/Converter';

export const getThemeProperty = (property: string): string => {
  return getComputedStyle(document.documentElement).getPropertyValue(property);
};

export const getFlagFromCurrencyCode = (currencyCode: string): string => {
  const info = currencyMap[currencyCode];
  const country = info?.country ?? '';
  return flag(country) ?? '💵';
};

export const getCurrencyNameFromCurrencyCode = (
  currencyCode: string,
): string => {
  const info = currencyMap[currencyCode];
  return info?.currency ?? currencyCode;
};

export const getNewToAmount = (
  amount: number,
  exchangeRate: number,
): number => {
  return Number((amount * exchangeRate).toFixed(2));
};

export const getNewFromAmount = (
  amount: number,
  exchangeRate: number,
): number => {
  if (amount === 0 || exchangeRate === 0) {
    return 0;
  }
  return Number((amount / exchangeRate).toFixed(2));
};

export const calcNewRates = (rates: Rates, converter: number): Rates => {
  const newRates: Rates = {};
  for (const [key, value] of Object.entries(rates)) {
    newRates[key] = Number((value / converter).toFixed(6));
  }
  return newRates;
};

type RecalculationProps = {
  oldRates: Rates;
  fromCurrency: string;
  toCurrency: string;
  fromAmount: number;
};

type RecalculationResult = {
  calculatedRates: Rates;
  newExchangeRate: number;
  newToAmount: number;
};

export const recalculateRatesExchangeRateAndToAmount = ({
  oldRates,
  fromCurrency,
  toCurrency,
  fromAmount,
}: RecalculationProps): RecalculationResult => {
  const rateConverter = oldRates[fromCurrency];
  const calculatedRates = calcNewRates(oldRates, rateConverter);
  const newExchangeRate = calculatedRates[toCurrency];
  const newToAmount = getNewToAmount(fromAmount, newExchangeRate);
  return { calculatedRates, newExchangeRate, newToAmount };
};

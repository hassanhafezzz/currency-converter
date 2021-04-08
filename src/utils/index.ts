import { flag } from 'country-emoji';
import currencyMap from './currencyMap';
import { Rates } from '../components/Converter';

//=== TODO: Remove sleep utils
export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getThemeProperty = (property: string): string => {
  return getComputedStyle(document.documentElement).getPropertyValue(property);
};

export const getFlagFromCurrencyCode = (currencyCode: string): string => {
  const info = currencyMap[currencyCode];
  const country = info?.country ?? '';
  return flag(country) ?? '💵';
};

export const getCurrencyFromCurrencyCode = (currencyCode: string): string => {
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
  return Number((amount / exchangeRate).toFixed(2));
};

export const calcNewRates = (rates: Rates, converter: number): Rates => {
  const newRates: Rates = {};
  for (const [key, value] of Object.entries(rates)) {
    newRates[key] = Number((value / converter).toFixed(6));
  }
  return newRates;
};
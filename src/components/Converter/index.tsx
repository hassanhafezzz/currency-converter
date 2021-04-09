import React, { useEffect, useState, FC, ChangeEvent } from 'react';
import classNames from 'classnames/bind';
import TimeAgo from 'react-timeago';
import { fetchLatestRates } from '../../api';

import {
  getNewToAmount,
  getNewFromAmount,
  recalculateRatesExchangeRateAndToAmount,
  getFlagFromCurrencyCode,
} from '../../utils';

import switchImg from '../../imgs/switch.svg';
import { ReactComponent as RefreshIcon } from '../../imgs/refresh.svg';
import Select from '../Select';
import Input from '../Input';
import ErrorMessage from '../ErrorMessage';

import styles from './styles.module.css';
const cx = classNames.bind(styles);

export type Rates = { [key: string]: number };
export type Latest = {
  rates: Rates;
  base: string;
  timestamp: number;
};

const Converter: FC = () => {
  const [currencyRates, setCurrencyRates] = useState<Rates>({});
  const [lastUpdated, setLastUpdated] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [exchangeRate, setExchangeRate] = useState(0);
  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getCurrencyOptions = async () => {
      setIsLoading(true);
      try {
        const { data } = await fetchLatestRates();
        const { base, rates, timestamp }: Latest = data;
        const ratesKeys = Object.keys(rates);
        const toCurrency = ratesKeys[0];
        const exchangeRate = rates[toCurrency];
        const newToAmount = getNewToAmount(1, exchangeRate);

        setCurrencyRates(rates);
        setFromCurrency(base);
        setToCurrency(toCurrency);
        setExchangeRate(exchangeRate);
        setToAmount(newToAmount);
        setLastUpdated(timestamp);
      } catch (error) {
        setError(error?.message ?? 'Oops something went wrong');
      } finally {
        setIsLoading(false);
      }
    };

    getCurrencyOptions();
  }, []);

  const handleFromAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currFromAmount = Number(e.target.value);
    const newToAmount = getNewToAmount(currFromAmount, exchangeRate);
    setFromAmount(currFromAmount);
    setToAmount(newToAmount);
  };

  const handleToAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currToAmount = Number(e.target.value);
    const newFromAmount = getNewFromAmount(currToAmount, exchangeRate);
    setToAmount(currToAmount);
    setFromAmount(newFromAmount);
  };

  const handleFromCurrencyChange = (newFromCurrency: string) => {
    const {
      calculatedRates,
      newExchangeRate,
      newToAmount,
    } = recalculateRatesExchangeRateAndToAmount({
      oldRates: currencyRates,
      fromCurrency: newFromCurrency,
      toCurrency,
      fromAmount,
    });

    setFromCurrency(newFromCurrency);
    setCurrencyRates(calculatedRates);
    setExchangeRate(newExchangeRate);
    setToAmount(newToAmount);
  };

  const handleToCurrencyChange = (newToCurrency: string) => {
    const newExchangeRate = currencyRates[newToCurrency];
    const newToAmount = getNewToAmount(fromAmount, newExchangeRate);

    setExchangeRate(newExchangeRate);
    setToCurrency(newToCurrency);
    setToAmount(newToAmount);
  };

  const refreshRates = async () => {
    setIsLoading(true);
    try {
      const { data } = await fetchLatestRates();
      const { rates, timestamp } = data;

      const {
        calculatedRates,
        newExchangeRate,
        newToAmount,
      } = recalculateRatesExchangeRateAndToAmount({
        oldRates: rates,
        fromCurrency,
        toCurrency,
        fromAmount,
      });

      setLastUpdated(timestamp);
      setExchangeRate(newExchangeRate);
      setToAmount(newToAmount);
      setCurrencyRates(calculatedRates);
    } catch (error) {
      setError(error?.message ?? 'Oops something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const currencyOptions = Object.keys(currencyRates);
  const options = currencyOptions.map((currency) => ({
    label: `${getFlagFromCurrencyCode(currency)} ${currency}`,
    value: currency,
  }));

  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>Currency converter</h2>
      <div className={cx('converter')}>
        <div className={cx('from')}>
          <div className={cx('currency-row')}>
            <Input
              onChange={handleFromAmountChange}
              value={fromAmount}
              min="0"
              type="number"
              label="from Amount Field"
            />

            <Select
              testId="from-currency-select"
              onChange={(option) => {
                handleFromCurrencyChange(option?.value ?? '');
              }}
              value={options.find((option) => option.value === fromCurrency)}
              options={options}
              label="from currency type"
            />
          </div>
          <button
            type="button"
            onClick={refreshRates}
            title={isLoading ? 'loading...' : 'refresh rates'}
            className={cx('refresh-button', { loading: isLoading })}
            disabled={isLoading}
          >
            <RefreshIcon fill="currentColor" />
            {isLoading ? '' : 'Refresh rates'}
          </button>
        </div>

        <div className={cx('switch-icon')}>
          <img src={switchImg} alt="switch icon" />
        </div>

        <div className={cx('to')}>
          <div className={cx('currency-row')}>
            <Input
              onChange={handleToAmountChange}
              value={toAmount}
              min="0"
              type="number"
              variant="gray"
              label="To Amount Field"
            />
            <Select
              testId="to-currency-select"
              onChange={(option) => {
                handleToCurrencyChange(option?.value ?? '');
              }}
              value={options.find((option) => option.value === toCurrency)}
              options={options}
              variant="gray"
              aria-label="to currency type"
            />
          </div>
          {exchangeRate ? (
            <p className={cx('rate')}>
              <span>1</span> {fromCurrency} = <span>{exchangeRate}</span> {''}
              {toCurrency}
            </p>
          ) : null}
        </div>
      </div>
      {lastUpdated ? (
        <p className={cx('last-update')}>
          <span>last updated </span>
          <TimeAgo date={new Date(lastUpdated * 1000)} />
        </p>
      ) : null}

      {error ? (
        <ErrorMessage dismissMessage={() => setError('')}>{error}</ErrorMessage>
      ) : null}
    </div>
  );
};

export default Converter;

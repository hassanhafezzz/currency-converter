import React, { useEffect, useState, FC, ChangeEvent } from 'react';
import classNames from 'classnames/bind';
import TimeAgo from 'react-timeago';
// import api from '../../api';
import { latest } from '../../dataMock';
import {
  sleep,
  getNewToAmount,
  getNewFromAmount,
  calcNewRates,
  getFlagFromCurrencyCode,
} from '../../utils';
import switchImg from '../../imgs/switch.svg';
import { ReactComponent as RefreshIcon } from '../../imgs/refresh.svg';
import Select from '../Select';
import Input from '../Input';

import styles from './styles.module.css';
const cx = classNames.bind(styles);

export type Rates = { [key: string]: number };

const Converter: FC = () => {
  const [currencyRates, setCurrencyRates] = useState<Rates>({});
  const [lastUpdated, setLastUpdated] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [exchangeRate, setExchangeRate] = useState(0);
  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState(1);

  useEffect(() => {
    const getCurrencyOptions = async () => {
      // const {data} = await api.get('/latest');
      // === TODO replace mockdata with api call

      await sleep(1e3);
      const data = latest;

      const {
        base,
        rates,
        timestamp,
      }: {
        base: string;
        timestamp: number;
        rates: Rates;
      } = data;
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
    const rateConverter = currencyRates[newFromCurrency];
    const newCurrencyRates = calcNewRates(currencyRates, rateConverter);
    const newExchangeRate = newCurrencyRates[toCurrency];
    const newToAmount = getNewToAmount(fromAmount, newExchangeRate);

    setFromCurrency(newFromCurrency);
    setCurrencyRates(newCurrencyRates);
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
              label="Currency Amount Field"
            />

            <Select
              onChange={(option) => {
                handleFromCurrencyChange(option?.value ?? '');
              }}
              value={options.find((option) => option.value === fromCurrency)}
              options={options}
              label="Currency Type"
            />
          </div>
          <button type="button" className={cx('refresh-button')}>
            <RefreshIcon fill="currentColor" />
            Refresh rates
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
              label="Currency Amount Field"
            />
            <Select
              onChange={(option) => {
                handleToCurrencyChange(option?.value ?? '');
              }}
              value={options.find((option) => option.value === toCurrency)}
              options={options}
              variant="gray"
              aria-label="Currency Type"
            />
          </div>
          <p className={cx('rate')}>
            <span>1</span> {fromCurrency} = <span>{exchangeRate}</span> {''}
            {toCurrency}
          </p>
        </div>
      </div>
      {lastUpdated ? (
        <p className={cx('last-update')}>
          <span>last updated </span>
          <TimeAgo date={new Date(lastUpdated * 1000)} />
        </p>
      ) : null}
    </div>
  );
};

export default Converter;

import React, { FC } from 'react';
import classNames from 'classnames/bind';
import switchImg from '../../imgs/switch.svg';
import { ReactComponent as RefreshIcon } from '../../imgs/refresh.svg';
import Select from '../Select';
import Input from '../Input';

import styles from './styles.module.css';
const cx = classNames.bind(styles);

const Converter: FC = () => {
  const options = [
    { value: 'eur', label: 'Euro' },
    { value: 'egp', label: 'Egyptian pound' },
    { value: 'usd', label: 'Dollar' },
  ];

  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>Currency converter</h2>
      <div className={cx('converter')}>
        <div className={cx('from')}>
          <div className={cx('currency-row')}>
            <Input
              value={1}
              min="0"
              type="number"
              label="Currency Amount Field"
            />

            <Select
              defaultValue={options[0]}
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
              value={1}
              min="0"
              type="number"
              variant="gray"
              label="Currency Amount Field"
            />
            <Select
              defaultValue={options[0]}
              options={options}
              variant="gray"
              aria-label="Currency Type"
            />
          </div>
          <p className={cx('rate')}>1USD = 0.89Euro</p>
        </div>
      </div>
    </div>
  );
};

export default Converter;

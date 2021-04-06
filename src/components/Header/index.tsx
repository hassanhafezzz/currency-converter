import React, { FC } from 'react';
import classNames from 'classnames/bind';

import logo from '../../imgs/logo.svg';
import styles from './styles.module.css';

const cx = classNames.bind(styles);

const Header: FC = () => {
  return (
    <header className={cx('header')}>
      <nav>
        <h1 className={cx('brand')}>
          <a href="/">
            <span className={cx('visually-hidden')}>Currency converter</span>
            <img
              src={logo}
              className={cx('logo')}
              alt="currency converter logo"
            />
          </a>
        </h1>
      </nav>
    </header>
  );
};

export default Header;

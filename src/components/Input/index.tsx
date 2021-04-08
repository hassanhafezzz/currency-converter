import React, { FC, InputHTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import styles from './styles.module.css';
const cx = classNames.bind(styles);

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  variant?: 'default' | 'gray';
}
const Input: FC<InputProps> = ({
  variant = 'default',
  label,
  children,
  ...rest
}) => {
  return (
    <input
      className={cx('input', { 'bg-gray': variant === 'gray' })}
      aria-label={label}
      {...rest}
    >
      {children}
    </input>
  );
};

export default Input;

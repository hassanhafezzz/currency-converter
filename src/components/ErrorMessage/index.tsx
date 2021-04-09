import React, { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

const ErrorMessage: FC<{ dismissMessage: () => void }> = ({
  dismissMessage,
  children,
}) => {
  return (
    <div role="alert" className={cx('error')}>
      <button type="button" className={cx('close')} onClick={dismissMessage}>
        close
      </button>
      <p>{children}</p>
    </div>
  );
};

export default ErrorMessage;

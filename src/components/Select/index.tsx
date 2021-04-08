import React, { FC } from 'react';
import Select, { Props as ReactSelectProps } from 'react-select';
import { getThemeProperty } from '../../utils';

type ProvidedStyles = { [key: string]: string };
type Variant = 'default' | 'gray';

const getStyles = (variant: Variant) => ({
  container: (provided: ProvidedStyles) => ({
    ...provided,
    border: 'none',
    margin: '0',
  }),
  control: (
    provided: ProvidedStyles,
    { isFocused }: { isFocused: boolean },
  ) => {
    return {
      ...provided,
      cursor: 'pointer',
      border: 'none',
      boxShadow: 'none',
      outline: 'none',
      borderRadius: 0,
      height: 60,
      backgroundColor:
        variant === 'gray' ? getThemeProperty('--color-gray-100') : '#fff',
      borderBottom: `3px solid ${
        isFocused
          ? getThemeProperty('--color-primary-500')
          : getThemeProperty('--color-gray-500')
      }`,
      fontSize: getThemeProperty('--h3-size'),
      '&:hover': {
        borderColor: getThemeProperty('--color-primary-500'),
      },
    };
  },
  menuList: (provided: ProvidedStyles) => ({
    ...provided,
    padding: 0,
    borderRadius: 4,
  }),
  option: (
    provided: ProvidedStyles,
    { isFocused, isSelected }: { isFocused: boolean; isSelected: boolean },
  ) => {
    let bgColor = '#fff';
    let color = getThemeProperty('--color-black');
    if (isSelected) {
      bgColor = getThemeProperty('--color-primary-500');
      color = '#fff';
    } else if (isFocused) {
      bgColor = getThemeProperty('--color-primary-100');
    }
    return {
      ...provided,
      color,
      cursor: 'pointer',
      backgroundColor: bgColor,
    };
  },
  dropdownIndicator: (provided: ProvidedStyles) => ({
    ...provided,
    color: getThemeProperty('--color-gray-500'),
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
});

const SelectWrapper: FC<ReactSelectProps> = ({
  variant = 'default',
  defaultValue,
  options,
  label,
  ...rest
}) => {
  const customStyles = getStyles(variant);
  return (
    <Select
      styles={customStyles}
      defaultValue={defaultValue}
      options={options}
      aria-label={label}
      {...rest}
    />
  );
};

export default SelectWrapper;

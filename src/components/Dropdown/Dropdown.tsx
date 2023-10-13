import classNames from 'classnames';
import { useState } from 'react';

import useDropdownIsOpen from 'hooks/useDropdownIsOpen';

import Input from '../Input';
import ArrowDownIcon from '../icons/ArrowDownIcon';

import css from './Dropdown.module.scss';

export type DropdownProps<T> = {
  width: 's' | 'm' | 'l';
  className?: string;
  value: T;
  options: T[];
  onClick?: () => void;
  onChange: (value: T) => void;
};

function Dropdown<T>({ value, options, width = 's', className, onChange }: DropdownProps<T>) {
  const [searchType, setSearchType] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const { isOpen, handleIsOpen, refWrapper } = useDropdownIsOpen();

  const localOnChange = (value: T) => {
    handleIsOpen(false);
    onChange(value);
  };

  const val = String(value);

  const filteredOptions = options.filter((el) => String(el).includes(searchType));

  const displayValue = isTouched ? searchType : val;

  const cnWrapper = classNames(css.wrapperDropDown, className, css[width]);

  return (
    <div className={cnWrapper}>
      <div className={css.inputWrapper} ref={refWrapper} onClick={() => handleIsOpen(true)}>
        <Input
          width={width}
          placeholder={val}
          onFocus={() => handleIsOpen(true)}
          afterSlot={<ArrowDownIcon color="third" />}
          onChange={(value: string) => {
            setSearchType(value);
            setIsTouched(true);
          }}
          value={displayValue}
        />
      </div>

      {isOpen ? (
        <ul className={css.list}>
          {filteredOptions.map((el) => (
            <li
              key={String(el)}
              onClick={() => localOnChange(el)}
              className={`${css.item} ${value === el ? css.item_checked : ''}`}
            >
              {String(el)}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

Dropdown.displayName = 'DropDown';

export default Dropdown;

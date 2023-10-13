import classnames from 'classnames';
import { InputHTMLAttributes, ReactNode } from 'react';

import useFocus from 'hooks/useFocus';

import css from './Input.module.scss';

type TWidthInput = 's' | 'm' | 'l';

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> & {
  value: string;
  styles?: object;
  className?: string;
  width: TWidthInput;
  placeholder: string;
  borderRadius?: string;
  afterSlot?: ReactNode;
  onChange?: (value: string) => void;
};

const inputWidthClass: Record<TWidthInput, string> = {
  s: css.s,
  m: css.m,
  l: css.l,
};

const Input = ({
  styles,
  onChange,
  value = '',
  afterSlot,
  className,
  type = 'text',
  borderRadius,
  width = 's',
  ...props
}: InputProps) => {
  const cxInputWrapper = classnames(css.inputWrapper, className, inputWidthClass[width]);

  const { inputRef, handleFocusOnClick } = useFocus();

  return (
    <div onClick={handleFocusOnClick} className={cxInputWrapper} style={{ borderRadius }}>
      <input
        className={css.nativeInput}
        ref={inputRef}
        type={type}
        value={value}
        onChange={(e) => {
          onChange && onChange(e.target.value);
        }}
        style={styles && { ...styles }}
        {...props}
      />
      {afterSlot ? <>{afterSlot}</> : null}
    </div>
  );
};

export default Input;

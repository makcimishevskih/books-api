import classNames from 'classnames';

import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import Loader from '../Loader';
import css from './Button.module.scss';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren<{
    loading?: boolean;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    isRound?: boolean;
    isRect?: boolean;
    loaderColor?: 'primary' | 'secondary' | 'third';
  }>;

const Button = ({
  isRect,
  loading,
  isRound,
  children,
  disabled,
  className,
  loaderColor,
  onClick,
  ...props
}: ButtonProps) => {
  const cn = classNames(
    css.button,
    className,
    loading && css.loading,
    disabled && css.disabled,
    isRect && css.rected,
    isRound && css.rounded,
  );

  return (
    <button className={cn} onClick={!loading ? onClick : undefined} disabled={disabled || loading} {...props}>
      {children}
      {loading && <Loader color={loaderColor} className={css.button__loader} size="s" />}
    </button>
  );
};

export default Button;

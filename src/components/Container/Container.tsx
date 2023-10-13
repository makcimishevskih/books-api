import classNames from 'classnames';
import { PropsWithChildren } from 'react';

import css from './Container.module.scss';

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

const Container = ({ className, children }: ContainerProps) => {
  const cnContainer = classNames(css.container, className);

  return <div className={cnContainer}>{children}</div>;
};
export default Container;

import classNames from 'classnames';

import css from './Card.module.scss';

export type CardProps = {
  className?: string;
  image: string;
  name: React.ReactNode;
  actionSlot?: React.ReactNode;
  contentSlot?: React.ReactNode;
  categorySlot?: string;
  onClick?: React.MouseEventHandler;
};

const Card = ({ name, image, onClick, actionSlot, categorySlot, contentSlot, className, ...props }: CardProps) => {
  const cxCard = classNames(css.card, className);

  return (
    <div onClick={onClick} className={cxCard} {...props}>
      <div className={css.card__imgWrapper}>
        <img
          loading="lazy"
          width="140"
          height="200"
          className={css.card__img}
          src={image}
          alt={typeof name === 'string' ? name : 'book'}
        />
      </div>

      <div className={css.info}>
        <div className={css.info__header}>
          {categorySlot && <p className={css.info__category}>{categorySlot}</p>}
          <h2 className={css.info__name}>{name}</h2>
        </div>

        <div className={css.info__footer}>
          {contentSlot && <span className={css.info__contentSlot}>{contentSlot}</span>}
          {actionSlot}
        </div>
      </div>
    </div>
  );
};

export default Card;

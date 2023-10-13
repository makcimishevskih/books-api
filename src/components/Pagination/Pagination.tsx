import { FC } from 'react';

import css from './Pagination.module.scss';

type TPaginationProps = {
  offset: number;
  totalBooks: number;
  onChange: (pageNumb: number) => void;
};

const Pagination: FC<TPaginationProps> = ({ offset, totalBooks, onChange }) => {
  const handleOffset = () => {
    if (offset === 0) {
      onChange(offset + 30);
    } else if (offset + 30 >= totalBooks) {
      onChange(totalBooks - offset);
    }
  };

  return (
    <div className={css.pagination}>
      <button onClick={handleOffset}>Load More</button>
    </div>
  );
};
export default Pagination;

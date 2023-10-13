import { Link } from 'react-router-dom';

import Card from 'components/Card';

import { ROUTES } from 'config/routes';
import { Book } from 'store/config/types';
import { getImage } from 'utils/getImage';

import css from './BooksList.module.scss';

type BooksListProps = {
  books: Book[];
};

const BooksList = ({ books }: BooksListProps) => {
  const booksList =
    books &&
    books.length > 0 &&
    books.map((el) => (
      <Link className={css.bookList__link} key={el.id + el.etag} to={ROUTES.home.book.createRoot(el.id)}>
        <Card
          categorySlot={(el.volumeInfo?.categories && el.volumeInfo.categories[0]) || ''}
          contentSlot={el.volumeInfo?.authors?.join(', ') || ''}
          name={el?.volumeInfo?.title || ''}
          image={getImage(el)}
        />
      </Link>
    ));

  return <div className={css.booksList}>{booksList}</div>;
};

export default BooksList;

import { useNavigate, useParams } from 'react-router-dom';

import Button from 'components/Button';

import useCurrentBook from 'hooks/useCurrentBook';
import { getImage } from 'utils/getImage';

import css from './Book.module.scss';

const Book = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { currentBook } = useCurrentBook(id);

  return (
    <section className={css.bookWrapper}>
      {currentBook && (
        <article className={css.book}>
          <div className={css.bookInfo}>
            <img className={css.bookInfo__img} src={getImage(currentBook)} loading="lazy" />
          </div>
          <div className={css.bookContent}>
            <span className={css.bookContent__categories}>
              {(currentBook.volumeInfo.categories && `${currentBook.volumeInfo.categories} / General`) ||
                'No genre data'}
            </span>
            <h2 className={css.bookContent__title}>{currentBook.volumeInfo.title}</h2>
            <span className={css.bookContent__authors}>
              {currentBook.volumeInfo.authors?.join(', ') || 'No author data'}
            </span>
            <p className={css.bookContent__description}>
              {currentBook.volumeInfo.description || 'No description data'}
            </p>
            <Button className={css.bookContent__goBackBtn} onClick={() => navigate(-1)}>
              Go back
            </Button>
          </div>
        </article>
      )}
    </section>
  );
};
export default Book;

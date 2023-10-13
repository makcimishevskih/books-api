import { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import Button from 'components/Button';
import Loader from 'components/Loader';
import ArrowDownIcon from 'components/icons/ArrowDownIcon';

import { API_ENDPOINTS } from 'config/api';
import usePagination from 'hooks/usePagination';
import useScroll from 'hooks/useScroll';
import { thunk } from 'store/books/booksReducer';

import { booksSelector } from 'store/books/selectors';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { searchSelector } from 'store/search/selectors';

import scrollTo from 'utils/scrollTo';

import BooksList from './components/BooksList';

import css from './Home.module.scss';

const Home = () => {
  const [, setQueryParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const { books, totalBooks, status, errorMessage } = useAppSelector(booksSelector);
  const { search, category, orderBy } = useAppSelector(searchSelector);

  const { offset, handleOffset, handleOffsetToValue } = usePagination(totalBooks);

  const { isScrollVisible } = useScroll();

  useEffect(() => {
    dispatch(thunk.fetchBooks(API_ENDPOINTS.books.createRoot(search, category, orderBy)));

    handleOffsetToValue(0);

    setQueryParams(`q=${search}&category=${category}&orderBy=${orderBy}`);
  }, [search, category, orderBy]);

  useEffect(() => {
    if (offset > 0) {
      dispatch(thunk.fetchMoreBooks(API_ENDPOINTS.addBooks.createRoot(search, category, orderBy, offset)));
    }
  }, [offset]);

  const isLoading = status === 'loading';
  const isError = errorMessage ? errorMessage : '';
  const hasBooks = books && books.length !== 0 && totalBooks !== 0;

  return (
    <section className={css.home}>
      {isLoading && !isError && offset === 0 && <Loader size="xl" />}
      {!isLoading && !isError && <p className={css.home__booksCounter}>Found {hasBooks ? totalBooks : 0} results</p>}
      {!isLoading && isError && <div className={css.home__error}>{errorMessage}</div>}

      {!isError && hasBooks && <BooksList books={books} />}

      {hasBooks && (
        <Button loaderColor="secondary" loading={isLoading} className={css.home__moreBooksBtn} onClick={handleOffset}>
          Load more
        </Button>
      )}

      {isScrollVisible && (
        <ArrowDownIcon color={'third'} className={css.home__toTopArrow} onClick={() => scrollTo(0)} />
      )}
    </section>
  );
};

export default Home;

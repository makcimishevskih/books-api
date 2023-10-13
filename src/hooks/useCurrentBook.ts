import { useEffect } from 'react';

import { booksSelector } from 'store/books/selectors';
import { useAppSelector } from 'store/hooks';

const useLocalStorage = (id = '') => {
  const { books } = useAppSelector(booksSelector);

  const currentBook = books.find((book) => book.id === id) || JSON.parse(window.localStorage.getItem('book') as string);

  useEffect(() => {
    const isSameBook = JSON.stringify(currentBook) === window.localStorage.getItem('book');

    if (!isSameBook) {
      window.localStorage.setItem('book', JSON.stringify(currentBook));
    }
  }, []);

  return {
    currentBook,
  };
};

export default useLocalStorage;

import noBook from 'assets/no-book.jpg';

import { Book } from 'store/config/types';

export function getImage(currentBook: Book) {
  const imageToDisplay =
    (currentBook && currentBook.volumeInfo.imageLinks?.medium) ||
    currentBook.volumeInfo.imageLinks?.thumbnail ||
    (currentBook && currentBook.volumeInfo.imageLinks?.large) ||
    currentBook.volumeInfo.imageLinks?.small ||
    currentBook.volumeInfo.imageLinks?.smallThumbnail ||
    noBook;

  return imageToDisplay;
}

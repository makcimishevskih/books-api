import { booksSelector } from 'store/books/selectors';
import { searchSelector } from 'store/search/selectors';

describe('redux selectors', () => {
  it('should get searchState', () => {
    const search = {
      search: '',
      category: 'all',
      orderBy: 'relevance',
    };

    const result = searchSelector({ search });
    expect(result).toEqual(search);
  });
  it('should get searchState', () => {
    const books = {
      books: [],
      totalBooks: 0,
      status: 'idle',
      errorMessage: '',
    };

    const result = booksSelector({ books });
    expect(result).toEqual(books);
  });
});

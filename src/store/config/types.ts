export type Status = 'idle' | 'loading' | 'rejected';

export type Categories = 'all' | 'art' | 'biography' | 'computers' | 'history' | 'medical' | 'poetry';

export type Order = 'relevance' | 'newest';

export type SearchTypes = {
  search: string;
  category: Categories;
  orderBy: Order;
};

export type Book = {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    description: string;
    authors: string[];
    printType: 'BOOK' | 'MAGAZINE' | 'UNKNOWN';
    categories: string[];
    maturityRating: 'MATURE' | 'NOT_MATURE';
    language: string;
    imageLinks: {
      smallThumbnail: string | undefined;
      thumbnail: string | undefined;
      small: string | undefined;
      medium: string | undefined;
      large: string | undefined;
      extraLarge: string | undefined;
    };
  };
  saleInfo: {
    country: string;
    saleability: 'FOR_SALE' | 'NOT_FOR_SALE';
    isEbook: boolean;
  };
};

export type ResponseBooks = {
  kind: string;
  items: Book[];
  totalItems: number;
};

export interface BooksState {
  books: Book[];
  totalBooks: number;
  status: Status;
  message: string;
}

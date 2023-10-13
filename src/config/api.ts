import { Categories, Order } from 'store/config/types';

export const API_KEY = process.env.REACT_APP_BOOKS_KEY;
export const API_BASE_URL = `https://www.googleapis.com/books/v1`;

export const API_ENDPOINTS = {
  books: {
    createRoot: (search: string, type: Categories, orderBy: Order): string =>
      `/volumes?q=${search}+subject:${
        type === 'all' ? '' : type
      }&maxResults=30&orderBy=${orderBy}&startIndex=10&key=${API_KEY}`,
  },
  addBooks: {
    createRoot: (search: string, type: Categories, orderBy: Order, offset: number): string =>
      `/volumes?q=${search}+subject:${
        type === 'all' ? '' : type
      }&maxResults=30&orderBy=${orderBy}&startIndex=${offset}&key=${API_KEY}`,
  },
};

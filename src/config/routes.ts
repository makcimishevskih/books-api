import { API_KEY } from 'config/api';

import { Categories, Order } from 'store/config/types';

export const ROUTES = {
  books: {
    mask: '/',
    createRoot: (search: string, type: Categories, orderBy: Order) =>
      `/volumes?q=${search}+subject:${type}&orderBy=${orderBy}&key=${API_KEY}`,
  },
  home: {
    mask: '/',
    book: {
      mask: '/book/:id',
      createRoot: (id: string) => `/book/${id}`,
    },
  },
  error: {
    mask: '/*',
  },
};

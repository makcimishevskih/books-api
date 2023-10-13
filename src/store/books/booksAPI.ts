import { createAsyncThunk } from '@reduxjs/toolkit';

import { Book, ResponseBooks } from 'store/config/types';

import { getData } from 'utils/fetchData';

type RejectValue = {
  rejectValue: string;
};

export const fetchBooks = createAsyncThunk<ResponseBooks, string, RejectValue>(
  'books/fetchBooks',
  async (url, { rejectWithValue }) => {
    return await getData<ResponseBooks>(url)
      .then((data) => {
        return data;
      })
      .catch((message) => {
        return rejectWithValue(message);
      });
  },
);
export const fetchMoreBooks = createAsyncThunk<Book[], string, RejectValue>(
  'books/fetchMoreBooks',
  async (url, { rejectWithValue }) => {
    return await getData<ResponseBooks>(url)
      .then((data) => {
        return data.items;
      })
      .catch((message) => {
        return rejectWithValue(message ? message : 'Fetch error');
      });
  },
);

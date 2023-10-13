import { createSlice } from '@reduxjs/toolkit';

import { BooksState } from '../config/types';
import { fetchBooks, fetchMoreBooks } from './booksAPI';

const initialState = {
  books: [],
  totalBooks: 0,
  status: 'idle',
  message: '',
} as BooksState;

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
        state.message = '';
      })
      .addCase(fetchBooks.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.books = payload.items;
        state.totalBooks = payload.totalItems;
      })
      .addCase(fetchBooks.rejected, (state, { payload }) => {
        state.status = 'rejected';
        state.message = payload ? payload : '';
      })
      .addCase(fetchMoreBooks.pending, (state) => {
        state.status = 'loading';
        state.message = '';
      })
      .addCase(fetchMoreBooks.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.books.push(...payload);
        console.log(state.books.length, payload.length);
      })
      .addCase(fetchMoreBooks.rejected, (state, { payload }) => {
        state.status = 'rejected';
        state.message = payload ? payload : '';
      });
  },
});

export const thunk = { fetchBooks, fetchMoreBooks };

export default booksSlice.reducer;

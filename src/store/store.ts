import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import booksReducer from './books/booksReducer';
import searchReducer from './search/searchReducer';

const store = configureStore({
  reducer: {
    books: booksReducer,
    search: searchReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

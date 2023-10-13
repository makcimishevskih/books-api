import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchTypes } from '../config/types';

const initialState = {
  search: window.localStorage.getItem('search') || '',
  category: window.localStorage.getItem('category') || 'all',
  orderBy: window.localStorage.getItem('orderBy') || 'relevance',
} as SearchTypes;

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setParams: (state, { payload: { search, category, orderBy } }: PayloadAction<SearchTypes>) => {
      const searchTrimmed = search.trim();

      window.localStorage.setItem('search', searchTrimmed);
      window.localStorage.setItem('category', category);
      window.localStorage.setItem('orderBy', orderBy);

      state.search = search.trim();
      state.category = category;
      state.orderBy = orderBy;
    },
  },
});

export const { setParams } = searchSlice.actions;

export default searchSlice.reducer;

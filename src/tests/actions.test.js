import searchReducer, { setParams } from 'store/search/searchReducer';

describe('actions', () => {
  it('should set params', () => {
    const defaultState = { search: 'some', category: 'all', orderBy: 'newest' };

    const result = searchReducer(defaultState, { type: '' });

    expect(result).toEqual(defaultState);
  });
  it('should set params from "setParams" action', () => {
    const defaultState = {
      search: 'some',
      category: 'art',
      orderBy: 'newest',
    };
    const payload = {
      search: 'some',
      category: 'art',
      orderBy: 'newest',
    };

    const result = searchReducer(defaultState, setParams(payload));

    expect(result.search).toEqual(payload.search);
  });
});

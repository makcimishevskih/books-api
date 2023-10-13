import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from 'store/store';

import RouterProvider from './RouterProvider';

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <RouterProvider>{children}</RouterProvider>
    </Provider>
  );
};
export default Providers;

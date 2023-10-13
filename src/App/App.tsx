import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const BookLazy = lazy(() => import('App/pages/Book'));

import Error from 'App/pages/Error';
import Home from 'App/pages/Home';

import Container from 'components/Container';
import Header from 'components/Header';
import Loader from 'components/Loader';

import { ROUTES } from 'config/routes';

import css from './App.module.scss';

const App = () => {
  return (
    <div className={css.app}>
      <Header />

      <Suspense fallback={<Loader size="xl" />}>
        <Routes>
          <Route
            path={ROUTES.home.mask}
            element={
              <Container>
                <Home />
              </Container>
            }
          />
          <Route
            path={ROUTES.home.book.mask}
            element={
              <Suspense fallback={<Loader size="xl" />}>
                <BookLazy />
              </Suspense>
            }
          />
          <Route path={ROUTES.error.mask} element={<Error />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

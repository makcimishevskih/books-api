import { NavLink } from 'react-router-dom';

import NavInputs from 'App/pages/Home/components/NavInputs';
import Container from 'components/Container';

import { ROUTES } from 'config/routes';

import css from './Header.module.scss';

const Header = () => {
  return (
    <header className={css.header}>
      <NavLink className={() => css.inactive} to={ROUTES.home.mask}>
        <h1 className={css.header__title}>Search for books</h1>
      </NavLink>
      <Container>
        <div className={css.navigation}>
          <div className={css.navigation__books}>
            <NavInputs />
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;

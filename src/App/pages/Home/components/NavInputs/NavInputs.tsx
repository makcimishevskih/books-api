import { FormEvent, useState } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';
import Button from 'components/Button';
import Dropdown from 'components/Dropdown';
import Input from 'components/Input';
import Loupe from 'components/icons/Loupe';

import { ROUTES } from 'config/routes';

import { Categories, Order } from 'store/config/types';
import { useAppDispatch } from 'store/hooks';
import { setParams } from 'store/search/searchReducer';

import { categoryOptions, orderByOptions } from './config';

import css from './NavInputs.module.scss';

const NavInputs = () => {
  const [, setQueryParams] = useSearchParams();

  const dispatch = useAppDispatch();
  const [search, setSearch] = useState<string>(window.localStorage.getItem('search') || '');
  const navigate = useNavigate();

  const [category, setCategory] = useState<Categories>(
    (window.localStorage.getItem('category') as Categories) || categoryOptions[0],
  );
  const [orderBy, setOrderBy] = useState<Order>((window.localStorage.getItem('orderBy') as Order) || orderByOptions[0]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setQueryParams(`q=${search}&category=${category}&orderBy=${orderBy}`);

    if (!search) return;

    dispatch(setParams({ search, category, orderBy }));

    navigate(ROUTES.home.mask);
  };

  return (
    <div className={css.navInputs}>
      <form onSubmit={handleSubmit} className={css.navInputs__filters}>
        <Dropdown width="s" value={category} onChange={setCategory} options={categoryOptions} />
        <Dropdown width="s" value={orderBy} onChange={setOrderBy} options={orderByOptions} />
        <div className={css.navInputs__search}>
          <Input width="l" value={search} onChange={setSearch} placeholder="Type some book..." />
          <Button>
            <Loupe />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NavInputs;

import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import css from './Error.module.scss';

const Error = () => {
  const navigate = useNavigate();

  const goToHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <section className={css.error}>
      <div>
        <div className={css.error__text}>Такой страницы не существует</div>
        <button className={css.button} onClick={goToHome}>
          go home
        </button>
      </div>
    </section>
  );
};
export default Error;

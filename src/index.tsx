import 'styles/index.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from 'App/App';
import Providers from 'providers/Providers';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
);

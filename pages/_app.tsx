import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store';

import setBaseUrl from '../utils/setBaseUrl';
import { API_URL } from '../app.config';
setBaseUrl(API_URL);

const App = ({ Component, pageProps }: AppProps): React.ReactNode => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            margin: 0px;
            padding: 0px;
          }
        `}
      </style>
    </Provider>
  );
};

export default App;

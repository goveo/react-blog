import React from 'react';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps): React.ReactNode => {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            margin: 0px;
            padding: 0px;
          }
        `}
      </style>
    </>
  );
};

export default App;

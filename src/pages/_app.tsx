import '../styles/styles.css';

import { AppProps } from 'next/app';
import { FC } from 'react';
import { Provider } from 'react-redux';

import { store } from '../store';

const App: FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
};

export default App;

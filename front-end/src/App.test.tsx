import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { Provider } from 'react-redux';
import store from './redux/store';

test.skip('renders App component without error', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
});

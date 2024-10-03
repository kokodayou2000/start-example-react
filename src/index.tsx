import ReactDOM from 'react-dom/client';
import App from './App';

import 'antd/dist/reset.css';
import React from 'react';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
import store from './store';
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

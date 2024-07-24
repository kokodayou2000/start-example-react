import ReactDOM from 'react-dom/client';
import App from './App';

import 'antd/dist/reset.css';
import React from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
);

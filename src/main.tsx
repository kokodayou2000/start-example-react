import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './index.css';
import 'antd/dist/reset.css';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
import store from '@/store';
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);

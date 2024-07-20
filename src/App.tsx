import { RouterProvider } from 'react-router-dom';
import router from '@/router';
import 'antd/dist/reset.css';

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;

import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout.tsx';
import Home from '@/pages/home/Home.tsx';
import Login from '@/pages/home/Login.tsx';
import Register from '@/pages/home/Register.tsx';
import NotFound from '@/pages/error/NotFound.tsx';
import ManageLayout from '@/layouts/ManageLayout.tsx';
import List from '@/pages/manage/List.tsx';
import Star from '@/pages/manage/Star.tsx';
import Trash from '@/pages/manage/Trash.tsx';
import QuestionLayout from '@/layouts/QuestionLayout.tsx';
import Status from '@/pages/quest/Status';
import Edit from '@/pages/quest/Edit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'manage',
        element: <ManageLayout />,
        children: [
          {
            path: 'list',
            element: <List />,
          },
          {
            path: 'star',
            element: <Star />,
          },
          {
            path: 'trash',
            element: <Trash />,
          },
        ],
      },

      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: 'question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit',
        element: <Edit />,
      },
      {
        path: 'status/:id',
        element: <Status />,
      },
    ],
  },
]);

export default router;

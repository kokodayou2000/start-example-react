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
import {
  DASH,
  EDIT,
  HOME,
  LIST,
  LOGIN,
  MANAGE,
  QUESTION,
  REGISTER,
  STAR,
  STATUS,
  TRASH,
} from '@/router/routerConstant.ts';

const router = createBrowserRouter([
  {
    path: HOME,
    element: <MainLayout />,
    children: [
      {
        path: HOME,
        element: <Home />,
      },
      {
        path: LOGIN,
        element: <Login />,
      },
      {
        path: REGISTER,
        element: <Register />,
      },
      {
        path: MANAGE,
        element: <ManageLayout />,
        children: [
          {
            path: LIST,
            element: <List />,
          },
          {
            path: STAR,
            element: <Star />,
          },
          {
            path: TRASH,
            element: <Trash />,
          },
        ],
      },

      {
        path: DASH,
        element: <NotFound />,
      },
    ],
  },
  {
    path: QUESTION,
    element: <QuestionLayout />,
    children: [
      {
        path: EDIT + '/:id',
        element: <Edit />,
      },
      {
        path: STATUS + '/:id',
        element: <Status />,
      },
    ],
  },
]);

export default router;

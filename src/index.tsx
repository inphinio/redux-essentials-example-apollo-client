import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Posts from './routes/posts';
import ErrorPage from './routes/error-page';
import SinglePostPage from './routes/single-post-page';
import Layout from './routes/layout';
import EditPostForm from './routes/edit-post-form';
import UsersList from './routes/users-list';
import UserPage from './routes/user-page';
import NotificationsList from './routes/notifications-list';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Posts />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/posts',
        element: <Posts />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/post/:postId',
        element: <SinglePostPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/editPost/:postId',
        element: <EditPostForm />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/users',
        element: <UsersList />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/user/:userId',
        element: <UserPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/notifications',
        element: <NotificationsList />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  </React.StrictMode>
);

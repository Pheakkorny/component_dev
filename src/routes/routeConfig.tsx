import { RouteObject } from 'react-router-dom';
import { MainLayout } from '../layout';
import { ComponentLayout } from '../layout';
import { Home, Components, ButtonPage, CardPage } from '../page/index';
import { Dashboard } from '../page/dashboard';
import { SidebarPage } from '../page/sidebarPage';

export const routeConfig: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'components',
        element: <ComponentLayout />,
        children: [
          {
            index: true,
            element: <Components />,
          },
          {
            path: 'button',
            element: <ButtonPage />,
          },
           {
            path: 'card',
            element: <CardPage />,
          },
          {
            path: 'sidebar',
            element: <SidebarPage />,
          },
          // Add more component routes here
          // {
          //   path: 'input',
          //   element: <InputPage />,
          // },
         
        ],
      },
    ],
  },
  // 404 catch-all route (optional but recommended)
  {
    path: '*',
    element: <div style={{ padding: '20px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <a href="/">Go Home</a>
    </div>,
  },
];
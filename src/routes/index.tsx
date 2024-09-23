import { RouteObject, useRoutes } from 'react-router-dom';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Layout from '@/layouts/MainLayout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
    ],
  },
];

export function AppRoutes() {
  return useRoutes(routes);
}

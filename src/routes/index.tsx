// src/routes/index.tsx
import { RouteObject, useRoutes } from 'react-router-dom';
import Home from '@/pages/home';
import About from '@/pages/about';
import Layout from '@/layouts/layout';

const routes: RouteObject[] = [
  {
    path: '/', // Base path
    element: <Layout />, // Layout wrapping the routes
    children: [
      { index: true, element: <Home /> }, // Home at '/'
      { path: 'about', element: <About /> }, // About at '/about'
    ],
  },
];

export function AppRoutes() {
  return useRoutes(routes);
}

// src/routes/index.tsx
import { RouteObject, useRoutes } from 'react-router-dom';
import PricingPlan from '@/pages/PricingPlan';
import Layout from '@/layouts/layout';
import Home from '@/pages/home';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'pricing-plan', element: <PricingPlan /> },
    ],
  },
];

export function AppRoutes() {
  return useRoutes(routes);
}

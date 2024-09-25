// src/routes/index.tsx
import { RouteObject, useRoutes } from 'react-router-dom';
import Home from '@/pages/Home';
import PricingPlan from '@/pages/PricingPlan';
import Layout from '@/layouts/layout';

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

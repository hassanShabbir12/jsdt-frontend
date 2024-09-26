import { RouteObject, useRoutes } from 'react-router-dom';
import Home from '@/pages/Home';
import LandingLayout from '@/layouts/LandingLayout';
import PricingPlan from '@/pages/PircingPlan';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'pricing-plan', element: <PricingPlan /> },
    ],
  },
];

export function AppRoutes() {
  return useRoutes(routes);
}

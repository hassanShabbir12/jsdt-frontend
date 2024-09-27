import { RouteObject, useRoutes } from 'react-router-dom';
import PricingPlan from '@/pages/pricing-plan';
import LandingLayout from '@/layouts/landing-layout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      //{ index: true, element: <Home /> },
      { path: 'pricing-plan', element: <PricingPlan /> },
    ],
  },
];

export function AppRoutes() {
  return useRoutes(routes);
}

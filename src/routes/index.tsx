import { RouteObject, useRoutes } from 'react-router-dom';
import PricingPlan from '@/pages/pricing-plan';
import LandingLayout from '@/layouts/landing-layout';
import Home from '@/pages/home';
import Payment from '@/pages/payment';
import LearnerSignUp from '@/pages/learners-signup';
import EducatorSignUp from '@/pages/educator-signup';

// sdfds;
const routes: RouteObject[] = [
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'pricing-plan', element: <PricingPlan /> },
      { path: 'payment', element: <Payment /> },
      { path: 'learner-signup', element: <LearnerSignUp /> },
      { path: 'educator-signup', element: <EducatorSignUp /> },
    ],
  },
];

export function AppRoutes() {
  return useRoutes(routes);
}

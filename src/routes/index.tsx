import { type ReactElement } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import LandingLayout from '@/layouts/landing-layout';
import SignupLayout from '@/layouts/signup-layout';
import EducatorSignUp from '@/pages/educator-signup';
import Home from '@/pages/home';
import LearnerSignUp from '@/pages/learners-signup';
import Payment from '@/pages/payment';
import PricingPlan from '@/pages/pricing-plan';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'pricing-plan', element: <PricingPlan /> },
      { path: 'payment', element: <Payment /> },
    ],
  },

  {
    path: '/signup',
    element: <SignupLayout />,
    children: [
      { index: true, element: <LearnerSignUp /> },
      { path: 'educator', element: <EducatorSignUp /> },
      { path: 'learner', element: <LearnerSignUp /> },
    ],
  },
];

export function AppRoutes(): ReactElement | null {
  return useRoutes(routes);
}

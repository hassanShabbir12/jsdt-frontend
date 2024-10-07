import { type ReactElement } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import AdminLayout from '@/layouts/admin-layout';
import LandingLayout from '@/layouts/landing-layout';
import SignupLayout from '@/layouts/signup-layout';
import BasicEducation from '@/pages/Education';
import EducatorSignUp from '@/pages/educator-signup';
import Grades from '@/pages/grades';
import Home from '@/pages/home';
import LearnerAccount from '@/pages/learner-account';
import LearnerSignUp from '@/pages/learners-signup';
import Login from '@/pages/login';
import Payment from '@/pages/payment';
import PricingPlan from '@/pages/pricing-plan';
import Subjects from '@/pages/subject';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'pricing-plan', element: <PricingPlan /> },
      { path: 'payment', element: <Payment /> },
      { path: 'login', element: <Login /> },
      { path: 'learner-account', element: <LearnerAccount /> },
      { path: 'basic-education', element: <BasicEducation /> },
    ],
  },

  {
    path: '/signup',
    element: <SignupLayout />,
    children: [
      { index: true, element: <LearnerSignUp /> },
      { path: 'educator', element: <EducatorSignUp /> },
    ],
  },

  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <Grades /> },
      { path: 'subjects', element: <Subjects /> },
    ],
  },
];

export function AppRoutes(): ReactElement | null {
  return useRoutes(routes);
}

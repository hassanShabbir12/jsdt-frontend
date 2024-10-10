import { type ReactElement } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import { AdminLayout } from '@/layouts/admin-layout';
import { LandingLayout } from '@/layouts/landing-layout';
import { SignupLayout } from '@/layouts/signup-layout';
import { AdminLogin } from '@/pages/admin-login';
import { BasicEducation } from '@/pages/education';
import { EducatorLogin } from '@/pages/educator-login';
import { EducatorSignUp } from '@/pages/educator-signup';
import { ForgotPassword } from '@/pages/forgot-password';
import { Grades } from '@/pages/grades';
import { Home } from '@/pages/home';
import { Instructions } from '@/pages/instructions';
import { LearnerAccount } from '@/pages/learner-account';
import { LearnerLogin } from '@/pages/learner-login';
import { LearnerSignUp } from '@/pages/learners-signup';
import { Payment } from '@/pages/payment';
import { PricingPlan } from '@/pages/pricing-plan';
import { Question } from '@/pages/question';
import { ResetPassword } from '@/pages/reset-password';
import { Subjects } from '@/pages/subject';
import { Taxonomy } from '@/pages/taxonomy';
import { Topic } from '@/pages/topic';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'pricing-plan', element: <PricingPlan /> },
      { path: 'payment', element: <Payment /> },
      { path: 'admin-login', element: <AdminLogin /> },
      { path: 'learner-account', element: <LearnerAccount /> },
      { path: 'basic-education', element: <BasicEducation /> },
      { path: 'forgot-password', element: <ForgotPassword /> },
      { path: 'reset-password', element: <ResetPassword /> },
      { path: 'instructions', element: <Instructions /> },
      { path: 'taxonomy', element: <Taxonomy /> },
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
    path: '/login',
    element: <SignupLayout />,
    children: [
      { index: true, element: <LearnerLogin /> },
      { path: 'educator', element: <EducatorLogin /> },
    ],
  },

  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <Grades /> },
      { path: 'subjects', element: <Subjects /> },
      { path: 'topics', element: <Topic /> },
      { path: 'questions', element: <Question /> },
    ],
  },
];

export function AppRoutes(): ReactElement | null {
  return useRoutes(routes);
}

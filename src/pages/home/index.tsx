import { FC } from 'react';

import {
  Banner,
  ExamGenerator,
  Faq,
  Footer,
  GeneratorDetail,
  Header,
  Testimonial,
  Works,
} from '@/pages/home/components';

import { PricingPlan } from '../pricing-plan';

export const Home: FC = () => (
  <div>
    <Header />
    <Banner />
    <ExamGenerator />
    <Works />
    <GeneratorDetail />
    <Testimonial />
    <PricingPlan />
    <Faq />
    <Footer />
  </div>
);

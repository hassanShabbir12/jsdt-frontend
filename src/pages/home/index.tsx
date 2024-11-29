import { FC, useEffect } from 'react';

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

export const Home: FC = () => {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.onload = (): void => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 150);
    };
  }, []);

  return (
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
};

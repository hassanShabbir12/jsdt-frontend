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

import { Payment } from '../payment';

export const Home: FC = () => (
  <div>
    <Header />
    <Banner />
    <ExamGenerator />
    <Works />
    <GeneratorDetail />
    <Testimonial />
    <Payment />
    <Faq />
    <Footer />
  </div>
);

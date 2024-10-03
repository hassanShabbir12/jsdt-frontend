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

import Payment from '../payment';

const Home: FC = () => (
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

export default Home;

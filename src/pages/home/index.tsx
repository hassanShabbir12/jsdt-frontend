import { FC } from 'react';

import {
  Banner,
  ExamGenerator,
  Faq,
  Footer,
  GeneratorDetail,
  Header,
  Pricing,
  Testimonial,
} from '@/pages/home/components';

const Home: FC = () => (
  <div>
    <Header />
    <Banner />
    <ExamGenerator />
    <GeneratorDetail />
    <Testimonial />
    <Pricing />
    <Faq />
    <Footer />
  </div>
);

export default Home;

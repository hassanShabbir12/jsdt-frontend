import { FC } from 'react';

import {
  Banner,
  ExamGenerator,
  Faq,
  Footer,
  GeneratorDetail,
  Header,
  Pricing,
  Works,
} from '@/pages/home/components';

const Home: FC = () => (
  <div>
    <Header />
    <Banner />
    <ExamGenerator />
    <Works />
    <GeneratorDetail />
    <Pricing />
    <Faq />
    <Footer />
  </div>
);

export default Home;

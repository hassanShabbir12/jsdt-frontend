import { FC } from 'react';

import {
  Banner,
  ExamGenerator,
  Faq,
  Footer,
  GeneratorDetail,
  Header,
  Pricing,
} from '@/pages/home/components';

const Home: FC = () => (
  <div>
    <Header />
    <Banner />
    <ExamGenerator />
    <GeneratorDetail />
    <Pricing />
    <Faq />
    <Footer />
  </div>
);

export default Home;

import { FC } from 'react';

import { Banner, ExamGenerator, GeneratorDetail, Header, Pricing } from '@/pages/home/components';

const Home: FC = () => (
  <div>
    <Header />
    <Banner />
    <ExamGenerator />
    <GeneratorDetail />
    <Pricing />
  </div>
);

export default Home;

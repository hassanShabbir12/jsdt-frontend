import { FC } from 'react';

import { Banner, ExamGenerator, GeneratorDetail, Pricing, Works } from '@/pages/home/components';

const Home: FC = () => (
  <div>
    <Banner />
    <ExamGenerator />
    <Works />
    <GeneratorDetail />
    <Pricing />
  </div>
);

export default Home;

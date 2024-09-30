import { FC } from 'react';

import { Banner, ExamGenerator, GeneratorDetail, Pricing } from '@/pages/home/components';

const Home: FC = () => (
  <div>
    <Banner />
    <ExamGenerator />
    <GeneratorDetail />
    <Pricing />
  </div>
);

export default Home;

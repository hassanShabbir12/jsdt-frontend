import { FC } from 'react';

import { Banner, GeneratorDetail, Pricing } from '@/pages/home/components';

const Home: FC = () => (
  <div>
    <Banner />
    <GeneratorDetail />
    <Pricing />
  </div>
);

export default Home;

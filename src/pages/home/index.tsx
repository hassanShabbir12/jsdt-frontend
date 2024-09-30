import { FC } from 'react';

import { Banner, GeneratorDetail, Header, Pricing } from '@/pages/home/components';

const Home: FC = () => (
  <div>
    <Header />
    <Banner />
    <GeneratorDetail />
    <Pricing />
  </div>
);

export default Home;

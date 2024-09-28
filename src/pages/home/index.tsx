import { FC } from 'react';

import { assetUrl } from '@/lib/asset-url';
import { Banner, GeneratorDetail, Pricing } from '@/pages/home/components';

const Home: FC = () => (
  <div>
    <Banner />
    <GeneratorDetail />
    <Pricing />
    <img src={assetUrl('/sdfd')} alt='' />
  </div>
);

export default Home;

import { FC } from 'react';

import { Sidebar, Signup } from './components';

const EducatorSignUp: FC = () => (
  <div className='relative flex min-h-screen w-full flex-col-reverse gap-4 overflow-hidden sm:flex-row sm:gap-0'>
    <Sidebar />
    <Signup />
  </div>
);

export default EducatorSignUp;

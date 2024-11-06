import { ReactElement } from 'react';

import { AppRoutes } from '@/routes';

import { Toaster } from './components/ui/toaster';

function App(): ReactElement {
  return (
    <>
      <Toaster />
      <AppRoutes />;
    </>
  );
}

export default App;

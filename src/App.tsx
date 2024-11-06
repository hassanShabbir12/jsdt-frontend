import { ReactElement } from 'react';
import { Toaster } from 'react-hot-toast';

import { AppRoutes } from '@/routes';

function App(): ReactElement {
  return (
    <>
      <Toaster position='top-center' reverseOrder={true} />
      <AppRoutes />;
    </>
  );
}

export default App;

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { StructureProvider } from './Context/StructureProvider';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <StructureProvider>
      <App  />
    </StructureProvider>
  </StrictMode>
);

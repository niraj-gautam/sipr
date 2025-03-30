import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoadingOverlay from './components/utils/LoadingOverlay';
import './index.css';

const App = lazy(() => import('./App'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LoadingOverlay />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
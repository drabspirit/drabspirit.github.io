import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Provide initial props if available
const pageProps = {}; // Replace with actual props if necessary

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App pageProps={pageProps} />
  </StrictMode>
);

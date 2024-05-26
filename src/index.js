import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Nie można znaleźć elementu o id 'root'");
} else {
  const root = createRoot(rootElement);
  root.render(<App />);
}

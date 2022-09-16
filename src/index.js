import React from 'react';
import { createRoot } from 'react-dom/client';
import { CartProvider } from './contexts/CartContext';
import { I18nextProvider } from 'react-i18next';

import i18n from './i18n';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <I18nextProvider i18n={i18n}>
    <CartProvider>
      <App />
    </CartProvider>
  </I18nextProvider>
);

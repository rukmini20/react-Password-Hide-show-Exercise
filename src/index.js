import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import PasswordInput from './PasswordInput';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <PasswordInput />
  </StrictMode>
);

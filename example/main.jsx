import React from 'react';
import { render } from 'react-dom';

import Demo from './demo';

render(
  <div style={{
    width: '100%',
    height: '100%',
  }}
  >
    <Demo />
  </div>,
  document.getElementById('root'),
);

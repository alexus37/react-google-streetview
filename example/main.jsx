import React from 'react';
import { render } from 'react-dom';

import GoogleStreetview from '../src';

render(
  <div style={{
    width: '100%',
    height: '100%',
  }}
  >
    <GoogleStreetview
      apiKey="<ADD API key here>"
    />
  </div>,
  document.getElementById('root'),
);

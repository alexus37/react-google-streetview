import React from 'react';
import asyncLoading from 'react-async-loader';
import GoogleStreetview from '../src';

// eslint-disable-next-line react/prop-types
const SplitView = ({ googleMaps }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      width: '100vw',
      alignItems: 'stretch',
      height: '100vh',
    }}
  >
    <div style={{ flexGrow: 1 }}>
      <GoogleStreetview googleMaps={googleMaps} />
    </div>
    <div style={{ flexGrow: 1 }}>
      <GoogleStreetview googleMaps={googleMaps} />
    </div>
  </div>
);

const mapScriptsToProps = ({ apiKey }) => ({
  googleMaps: {
    globalPath: 'google.maps',
    url: `https://maps.googleapis.com/maps/api/js?key=${apiKey}`,
    jsonp: true,
  },
});

export default asyncLoading(mapScriptsToProps)(SplitView);

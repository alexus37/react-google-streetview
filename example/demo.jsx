/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import GoogleStreetview from '../src';
import SplitView from './split-view';

const Demo = () => {
  const [key, setKey] = useState(undefined);
  const [splitViewFlag, setSplitViewFlag] = useState(false);
  const [inputVal, setInputVal] = useState('');
  return (
    <>
      {key ? (
        splitViewFlag ? (
          <SplitView apiKey={key} />
        ) : (
          <GoogleStreetview apiKey={key} />
        )
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h1>Enter your google streetview key to try it out</h1>
          <p>
            Get your google streetview key
            <a
              target="blank"
              href="https://developers.google.com/maps/documentation/javascript"
            >
              &nbsp;here
            </a>
          </p>
          <p>
            <input
              type="checkbox"
              onChange={() => setSplitViewFlag(!splitViewFlag)}
            />
            Use split screen view
          </p>
          <input value={inputVal} onChange={e => setInputVal(e.target.value)} />
          <button onClick={() => setKey(inputVal)} type="button">
            Set key
          </button>
        </div>
      )}
    </>
  );
};

export default Demo;

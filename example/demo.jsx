import React, { useState } from 'react';
import GoogleStreetview from '../src';


const Demo = () => {
  const [key, setKey] = useState(undefined);
  const [inputVal, setInputVal] = useState('');
  return (
    <>
      { key ?
        <GoogleStreetview apiKey={key} /> :
        <div style={{ textAlign: 'center' }}>
          <h1>
            Enter your google streetview key to try it out
          </h1>
          <p>
            Get your google streetview key
            <a
              target="blank"
              href="https://developers.google.com/maps/documentation/javascript"
            >
                &nbsp;here
            </a>
          </p>
          <input
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
          />
          <button
            onClick={() => setKey(inputVal)}
            type="button"
          >
            Set key
          </button>
        </div>}
    </>
  );
};

export default Demo;

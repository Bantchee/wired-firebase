import React, { useState } from 'react';
import './App.css';
import AgoraUIKit from 'agora-react-uikit';


const App = () => {
  const [inCall, setInCall] = useState(false);
  const rtcProps = {
    appId: '499da72755484274a1f430c5a9a9ce17',
    channel: 'test',
    token: '007eJxTYAhTMNm9QXar2YHvtbrM+470Gf19e0fFZ2bQja3cW+O7D9UqMJhYWqYkmhuZm5qaWJgYmZskGqaZGBskmyZaJlompxqa7/n0KLkhkJHh+4UAJkYGCATxWRhKUotLGBgAi4IhUA==',
  };

  const callbacks = {
    EndCall: () => setInCall(false),
  };

  const createNewCall = () => {

  };

  return (
    <div>
      <div
        className='flex gap-1'
      >
        <button 
        className='p-2 bg-neutral-400 text-lg'
        onClick={() => setInCall(true)}
        >
          Start Call
        </button>
        <button
          className='p-2 bg-neutral-400 text-lg'
          onClick={() => setInCall(false)}
        >
          Leave Call
        </button>
        <button
          className='p-2 bg-neutral-400 text-lg'
        >
          Join Call
        </button>
      </div>
      
      { 
        inCall ? 
          <div style={{display: 'flex', width: '100vw', height: '100vh'}}>
            <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
          </div> :
          null
      }
    </div>
  );
}

export default App;

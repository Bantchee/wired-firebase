import React, { useState } from 'react';
import './App.css';
import AgoraUIKit from 'agora-react-uikit';

const App = () => {
  const [inCall, setInCall] = useState(false);
  const rtcProps = {
    appId: '499da72755484274a1f430c5a9a9ce17',
    channel: 'test',
    token: '007eJxTYGBumbHp/XL76MU1BRNkFqxMPNH2xnKOR+MW/6oDHdYvA0UVGEwsLVMSzY3MTU1NLEyMzE0SDdNMjA2STRMtEy2TUw3N/6jfTW4IZGS47c7OwAiFID4LQ0lqcQkDAwBdcx+D',
  };
  const callbacks = {
    EndCall: () => setInCall(false),
  };

  return (
    <div>
      { 
        inCall ? 
          <div style={{display: 'flex', width: '100vw', height: '100vh'}}>
            <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
          </div> :
          <button 
            className='p-2 bg-neutral-400 text-lg'
            onClick={() => setInCall(true)}
          >
            Start Call
          </button>
      }
    </div>
  );
}

export default App;

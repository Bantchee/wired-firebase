import './App.css';
import { useState, useEffect } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';

function App() {
  const [inVideoCall, setInVideoCall] = useState(false);
  
  let options =
  {
    // Pass your App ID here.
    appId: '',
    // Set the channel name.
    channel: '',
    // Pass your temp token here.
    token: '',
    // Set the user ID.
    uid: 0,
  };

let channelParameters = {
  // A variable to hold a local audio track.
  localAudioTrack: null,
  // A variable to hold a local video track.
  localVideoTrack: null,
  // A variable to hold a remote audio track.
  remoteAudioTrack: null,
  // A variable to hold a remote video track.
  remoteVideoTrack: null,
  // A variable to hold the remote user id.s
};

function startCall() {
  console.log("Start Call");
  setInVideoCall(true);
};

function leaveCall(elementId) {
  console.log("Leave Call");
  setInVideoCall(false);
};

function createLocalPlayerContainer() {
  console.log("Create Call Element");
  return (
    <div
    style={{
      backgroundColor: 'red',
      width: '500px',
      height: '500px',
    }}
    >
    </div>
  );
};

function createRemotePlayerContainer() {
  console.log("Create Call Element");
  return (
    <div>
      <p>Video Call</p>
    </div>
  )
};

useEffect(() => {
  const startBasicCall = async () => {
    // Create an instance of the Agora Engine
    const agoraEngine = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
  }
}, [inVideoCall])

return (
  <div>
    <h1>Get Started with Video Call</h1>
    <div className="flex text-3xl font-bold">
      { (inVideoCall) ? createLocalPlayerContainer() : null }
      <button onClick={startCall}>Join</button>
      <button onClick={() => leaveCall(0)}>Leave</button>
    </div>
  </div>
);
}

export default App;

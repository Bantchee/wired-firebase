import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { db } from './firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
import Footer from './components/Footer';
import Header from './components/Header';
import StreamCatalog from './components/StreamCatalog';
import Stream from './components/Stream';
import { layout } from 'agora-react-uikit';

const App = () => {

  // Agora Livestream state
  const [inCall, setInCall] = useState(false);
  const [isHost, setHost] = useState(false);
  const [isPinned, setPinned] = useState(false);
  const [propsInterface, setPropsInterface] = useState({});

  // Firebase database state
  const [streams, setStreams] = useState([]);
  const [currentStream, setCurrentStream] = useState({});
  const [streamName, setStreamName] = useState('');
  const streamsCollectionRef = collection(db, 'streams');
  const [user, setUser] = useState({});
  

  setPropsInterface({
    rtcProps: {
      appId: process.env.AGORA_APP_ID,
      channel: "",
      role: isHost ? 'host' : 'audience',
      layout: isPinned ? layout.pin : layout.grid,
      token: "",
      uid: user.uid,
    },
    callbacks: {
      EndCall: () => setInCall(false),
    },
    styleProps: {
      localBtnContainer: {backgroundColor: 'blueviolet'}
    }
  });

  // IN > Out : streamName role > token
  const generateToken = (streamName, role) => {
    return "";
  };

  useEffect(() => {
    const getStreams = async () => {
      const data = await getDocs(streamsCollectionRef);
      setStreams(data.docs.map((doc) => ({...doc.data(), docId: doc.id})));
    };

    getStreams();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header user={user} setUser={setUser} streamName={streamName} setStreamName={setStreamName} />
        <Routes>
          <Route path='/' element={<StreamCatalog  streams={streams} setCurrentStream={setCurrentStream} setInCall={setInCall}/>}/>
          <Route path='/stream' element={<Stream stream={currentStream} inCall={inCall} setInCall={setInCall}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}




export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { db } from './firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
import Footer from './components/Footer';
import Header from './components/Header';
import StreamCatalog from './components/StreamCatalog';
import Stream from './components/Stream';

const App = () => {

  // Agora Livestream state
  const [inCall, setInCall] = useState(false);
  // const [isHost, setHost] = useState(false);
  // const [isPinned, setPinned] = useState(false);

  // Firebase database state
  const [streams, setStreams] = useState([]);
  const [currentStream, setCurrentStream] = useState({});
  const streamsCollectionRef = collection(db, 'streams');

  // const PropsInterface = {
  //   rtcProps: {
  //     // delete this
  //     appId: '499da72755484274a1f430c5a9a9ce17',
  //     // appId: process.env.AGORA_APP_ID,
  //     channel: 'testing',
  //     role: isHost ? 'host' : 'audience',
  //     layout: isPinned ? layout.pin : layout.grid,
  //     token: '006499da72755484274a1f430c5a9a9ce17IADcvNp5r10R6iAFdwCcV/oSW1mwJeogQG0feCGscRgujQZa8+ij4OObIgBiaWAFqqzvYwQAAQA6ae5jAgA6ae5jAwA6ae5jBAA6ae5j',
  //     uid: '1234',
  //   },
  //   callbacks: {
  //     EndCall: () => setInCall(false),
  //   },
  //   styleProps: {
  //     localBtnContainer: {backgroundColor: 'blueviolet'}
  //   }
  // }
  
  // const createStream = async () => {
  //   setInCall(true);

  //   // add new stream to databse
  //   // await addDoc(streamsCollectionRef, {title: inputStreamName, id: 'dadadaadada'});

  // };

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
        <Header/>
        <Routes>
          <Route path='/' element={<StreamCatalog  streams={streams} setCurrentStream={setCurrentStream} setInCall={setInCall}/>}/>
          <Route path='/stream' element={<Stream stream={currentStream} inCall={inCall} setInCall={setInCall}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
      {/* <div
        className='flex gap-1'
      >
        <input 
          placeholder='Stream Name...'
          onChange={(event) => setinputStreamName(event.target.value)}
        />
        <button 
        className='p-2 bg-neutral-400 text-lg'
        onClick={createStream}
        >
          Start Stream
        </button>
        <button
          className='p-2 bg-neutral-400 text-lg'
          onClick={() => setDisplayStreamList(!displayStreamList)}
        >
          Join Stream
        </button>
      </div>  */}
      
      {/* {
        inCall ? 
        (
          <div style={styles.container}>
            <div 
              className='flex flex-col'
            >
              <p style={{ fontSize: 20, width: 200 }}>You're {isHost ? 'a host' : 'an audience'}</p>
              <p style={styles.btn} onClick={() => setHost(!isHost)}>Change Role</p>
              <p style={styles.btn} onClick={() => setPinned(!isPinned)}>Change Layout</p>
            </div>
            <AgoraUIKit
              className='w-[100%]'
              rtcProps={PropsInterface.rtcProps}
              callbacks={PropsInterface.callbacks}
              styleProps={PropsInterface.styleProps} />
          </div>
        ) : null
      } */}
    </div>
  );
}




export default App;

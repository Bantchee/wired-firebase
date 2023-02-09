import React, { useState, useEffect, useSyncExternalStore } from 'react';
import './App.css';
import AgoraUIKit, { PropsInterface, layout } from 'agora-react-uikit';
import { db } from './firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';

const App = () => {

  // Agora Livestream state
  const [inCall, setInCall] = useState(false);
  const [isHost, setHost] = useState(false);
  const [isPinned, setPinned] = useState(false);

  // Firebase database state
  const [inputStreamName, setinputStreamName] = useState('');
  const [streams, setStreams] = useState([]);
  const [displayStreamList, setDisplayStreamList] = useState(false);
  const streamsCollectionRef = collection(db, 'streams');

  const PropsInterface = {
    rtcProps: {
      // delete this
      appId: '499da72755484274a1f430c5a9a9ce17',
      // appId: process.env.AGORA_APP_ID,
      channel: 'test',
      role: isHost ? 'host' : 'audience',
      layout: isPinned ? layout.pin : layout.grid,
      token: '007eJxTYAhTMNm9QXar2YHvtbrM+470Gf19e0fFZ2bQja3cW+O7D9UqMJhYWqYkmhuZm5qaWJgYmZskGqaZGBskmyZaJlompxqa7/n0KLkhkJHh+4UAJkYGCATxWRhKUotLGBgAi4IhUA==',
    },
    callbacks: {
      EndCall: () => setInCall(false),
    },
    styleProps: {
      localBtnContainer: {backgroundColor: 'blueviolet'}
    }
  }

  

  

  const createStream = async () => {
    setInCall(true);

    // add new stream to databse
    await addDoc(streamsCollectionRef, {title: inputStreamName, id: 'dadadaadada'});

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
      <div
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
        >
          Join Stream
        </button>
        <button
          className='p-2 bg-neutral-400 text-lg'
        >
          Watch Stream
        </button>
        <button
          className='p-2 bg-neutral-400 text-lg'
          onClick={() => setDisplayStreamList(!displayStreamList)}
        >
          View Stream List
        </button>
      </div> 
      {
        displayStreamList ?
          <div
            className='flex flex-wrap gap-2 list-disc'
          >
            <p>Stream List:</p>
            {streams.map((stream) => {
              return (
                <div key={stream.id}>
                  <p>{stream.title},</p>
                </div>
              )
            })}
            </div> :
          null
      }
      
      {
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
      }
    </div>
  );
}

const styles = {
  container: { width: '100vw', height: '100vh', display: 'flex', flex: 1, backgroundColor: '#007bff22'},
  heading: { textAlign: 'center', marginBottom: 0 },
  videoContainer: { display: 'flex', flexDirection: 'column', flex: 1 },
  nav: { display: 'flex', justifyContent: 'space-around' },
  btn: { backgroundColor: '#007bff', cursor: 'pointer', borderRadius: 5, padding: 5, color: '#ffffff', fontSize: 20 },
}


export default App;

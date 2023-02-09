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

  const rtcProps = {
    appId: process.env.AGORA_APP_ID,
    channel: 'test',
    token: '007eJxTYAhTMNm9QXar2YHvtbrM+470Gf19e0fFZ2bQja3cW+O7D9UqMJhYWqYkmhuZm5qaWJgYmZskGqaZGBskmyZaJlompxqa7/n0KLkhkJHh+4UAJkYGCATxWRhKUotLGBgAi4IhUA==',
  };

  const callbacks = {
    EndCall: () => setInCall(false),
  };

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
          <div 
            className='flex w-100wv h-[500px]'
          >
            <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
          </div> :
          null
      }
    </div>
  );
}

export default App;

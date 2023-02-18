import React, { useState } from "react";
import AgoraUIKit, { layout } from 'agora-react-uikit';

const Stream = ({ stream, inCall, setInCall }) => {
    
    const [isHost, setHost] = useState(false);
    const [isPinned, setPinned] = useState(false);

    const PropsInterface = {
        rtcProps: {
          appId: '499da72755484274a1f430c5a9a9ce17',
          // appId: process.env.AGORA_APP_ID,
          channel: stream.channel,
          role: isHost ? 'host' : 'audience',
          layout: isPinned ? layout.pin : layout.grid,
          token: stream.token,
          uid: '1234',
        },
        callbacks: {
          EndCall: () => setInCall(false),
        },
        styleProps: {
          localBtnContainer: {backgroundColor: 'blueviolet'}
        }
      }

    return (
        <div>
            {
                inCall ? 
                (
                <div style={styles.container}>
                    <div 
                    className='flex flex-col'
                    >
                        <p>Stream Title: {stream.channel}</p>
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
    )
}

const styles = {
    container: { width: '100vw', height: '100vh', display: 'flex', flex: 1, backgroundColor: '#007bff22'},
    heading: { textAlign: 'center', marginBottom: 0 },
    videoContainer: { display: 'flex', flexDirection: 'column', flex: 1 },
    nav: { display: 'flex', justifyContent: 'space-around' },
    btn: { backgroundColor: '#007bff', cursor: 'pointer', borderRadius: 5, padding: 5, color: '#ffffff', fontSize: 20 },
}

export default Stream;
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, connectFirestoreEmulator } from 'firebase/firestore/lite';
import { getAuth, connectAuthEmulator, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';

const firebaseConfig = {
    apiKey: 'AIzaSyCi5u-DUIbPAUnhM7AnQp0QkRnRu0i1vd8',
    authDomain: 'wired-firebase.firebaseapp.com',
    databaseURL: 'https://wired-firebase-default-rtdb.firebaseio.com',
    projectId: 'wired-firebase',
    storageBucket: 'wired-firebase.appspot.com',
    messagingSenderId: '591823628454',
    appId: '1:591823628454:web:b88c8d312f00d75ddd2c67',
  };

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   databaseURL: process.env.DATABASE_URL,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.FIRE_APP_ID,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
const auth = getAuth(app);
export const functions = getFunctions(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);

// .then((result) => {
//   const name = result.user.displayName;
//   const uid = result.user.uid;
//   const email = result.user.email;
//   const profilePic = result.user.photoURL;

//   localStorage.setItem("name", name);
//   localStorage.setItem("uid", uid);
//   localStorage.setItem("email", email);
//   localStorage.setItem("profilePic", profilePic);
  
// })
// .catch(error => {
//   console.log(error);
// });

if(window.location.hostname.includes('localhost')) {
    connectFirestoreEmulator(db, 'localhost', 8080);
    connectFunctionsEmulator(functions, 'localhost', 5001);
}

// get a list of cites from your database
// export async function getStreams(db) {
//   const streamsCol = collection(db, 'streams');
//   const citySnapshot = await getDocs(streamsCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }
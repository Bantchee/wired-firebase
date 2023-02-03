import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCi5u-DUIbPAUnhM7AnQp0QkRnRu0i1vd8",
  authDomain: "wired-firebase.firebaseapp.com",
  databaseURL: "https://wired-firebase-default-rtdb.firebaseio.com",
  projectId: "wired-firebase",
  storageBucket: "wired-firebase.appspot.com",
  messagingSenderId: "591823628454",
  appId: "1:591823628454:web:b88c8d312f00d75ddd2c67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
// get a list of cites from your database
async function getCites(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
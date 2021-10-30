import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCEwpiECpmKnvjoMWh1GGFcepf2jTAiYgw',
  authDomain: 'instagram-clone-12187.firebaseapp.com',
  projectId: 'instagram-clone-12187',
  storageBucket: 'instagram-clone-12187.appspot.com',
  messagingSenderId: '445710625230',
  appId: '1:445710625230:web:474e718bd5f8b2f71fe39f',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

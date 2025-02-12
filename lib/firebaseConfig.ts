import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCS3k2iblOQPVrIAk-Wq5F3BtkFZAOh4Ic',
  authDomain: 'brain-battle-d367d.firebaseapp.com',
  databaseURL: 'https://brain-battle-d367d-default-rtdb.firebaseio.com',
  projectId: 'brain-battle-d367d',
  storageBucket: 'brain-battle-d367d.appspot.com',
  messagingSenderId: '73795733482',
  appId: '1:73795733482:web:551719a32f405c803e5493',
  measurementId: 'G-6457BF16MS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const storage = getStorage(app);

export { app, db, auth, storage };

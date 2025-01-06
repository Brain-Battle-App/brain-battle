// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS3k2iblOQPVrIAk-Wq5F3BtkFZAOh4Ic",
  authDomain: "brain-battle-d367d.firebaseapp.com",
  databaseURL: "https://brain-battle-d367d-default-rtdb.firebaseio.com",
  projectId: "brain-battle-d367d",
  storageBucket: "brain-battle-d367d.firebasestorage.app",
  messagingSenderId: "73795733482",
  appId: "1:73795733482:web:551719a32f405c803e5493",
  measurementId: "G-6457BF16MS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
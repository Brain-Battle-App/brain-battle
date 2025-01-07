import React, { createContext, ReactNode, useEffect, useState } from "react";
import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import {
  initializeAuth,
  getReactNativePersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS3k2iblOQPVrIAk-Wq5F3BtkFZAOh4Ic",
  authDomain: "brain-battle-d367d.firebaseapp.com",
  databaseURL: "https://brain-battle-d367d-default-rtdb.firebaseio.com",
  projectId: "brain-battle-d367d",
  storageBucket: "brain-battle-d367d.firebasestorage.app",
  messagingSenderId: "73795733482",
  appId: "1:73795733482:web:551719a32f405c803e5493",
  measurementId: "G-6457BF16MS",
};

// Initialize Firebase services
const app: FirebaseApp = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);

// Context value type
interface FirebaseContextProps {
  signInWithEmailAndPassword: typeof signInWithEmailAndPassword;
  createUserWithEmailAndPassword: typeof createUserWithEmailAndPassword;
  app: FirebaseApp;
  db: typeof db;
  doc: typeof doc;
  setDoc: typeof setDoc;
  auth: typeof auth;
}

// Create the Firebase context
export const FirebaseContext = createContext<FirebaseContextProps | null>(null);

// Provider component
export const FirebaseProvider = ({ children }: { children: ReactNode }) => {



  return (
    <FirebaseContext.Provider
      value={{
        app,
        auth,
        doc,
        db,
        setDoc,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

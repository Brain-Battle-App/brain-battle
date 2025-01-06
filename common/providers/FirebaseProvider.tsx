// useFirebase.ts
import React, { createContext, useContext, ReactNode } from "react";
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";


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
const auth = getAuth(app);
const analytics: Analytics | null = typeof window !== "undefined" ? getAnalytics(app) : null;

// Define the context value type
interface FirebaseContext{
  signInWithEmailAndPassword: typeof signInWithEmailAndPassword;
  createUserWithEmailAndPassword: typeof createUserWithEmailAndPassword;
  app: FirebaseApp;
  analytics: Analytics | null;
  auth: any;
}

// Create the Firebase context
export const FirebaseContext = createContext<FirebaseContext | null>(null);

// Provider component
export const FirebaseProvider = ({ children }: {children: ReactNode}) => (
  <FirebaseContext.Provider value={{ app, analytics, auth, signInWithEmailAndPassword, createUserWithEmailAndPassword }}>{children}</FirebaseContext.Provider>
);


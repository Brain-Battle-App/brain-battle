import React, { createContext, ReactNode, useEffect, useState } from "react";
import { initializeApp, FirebaseApp } from "firebase/app";
import analytics, { FirebaseAnalyticsTypes } from '@react-native-firebase/analytics';
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

// Context value type
interface FirebaseContextProps {
  signInWithEmailAndPassword: typeof signInWithEmailAndPassword;
  createUserWithEmailAndPassword: typeof createUserWithEmailAndPassword;
  app: FirebaseApp;
  analytics: FirebaseAnalyticsTypes.Module | null;
  auth: typeof auth;
}

// Create the Firebase context
export const FirebaseContext = createContext<FirebaseContextProps | null>(null);

// Provider component
export const FirebaseProvider = ({ children }: { children: ReactNode }) => {
  const [analyticsInstance, setAnalyticsInstance] = useState<FirebaseAnalyticsTypes.Module | null>(null);

  useEffect(() => {
    const initializeAnalytics = async () => {
      try {
        const instance = analytics();
        setAnalyticsInstance(instance);
      } catch (error) {
        console.error("Failed to initialize Firebase Analytics:", error);
      }
    };

    initializeAnalytics();
  }, []);

  return (
    <FirebaseContext.Provider
      value={{
        app,
        analytics: analyticsInstance,
        auth,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import {
  initializeAuth,
  getReactNativePersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User as FirebaseUser,
} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { useFetchUserById } from '../hooks/queries/useFetchUserById';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCS3k2iblOQPVrIAk-Wq5F3BtkFZAOh4Ic',
  authDomain: 'brain-battle-d367d.firebaseapp.com',
  databaseURL: 'https://brain-battle-d367d-default-rtdb.firebaseio.com',
  projectId: 'brain-battle-d367d',
  storageBucket: 'brain-battle-d367d.firebasestorage.app',
  messagingSenderId: '73795733482',
  appId: '1:73795733482:web:551719a32f405c803e5493',
  measurementId: 'G-6457BF16MS',
};

// Initialize Firebase services
const app: FirebaseApp = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db: Firestore = getFirestore(app);

// Define User type from Firestore

// Context value type
interface AuthContextProps {
  user: User | null;
  signInWithEmailAndPassword: typeof signInWithEmailAndPassword;
  createUserWithEmailAndPassword: typeof createUserWithEmailAndPassword;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  db: typeof db;
  auth: typeof auth;
}

// Create the Auth context
export const AuthContext = createContext<AuthContextProps | null>(null);

// Provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { fetchUserById } = useFetchUserById(); // Hook to fetch user from Firestore

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userId = firebaseUser.uid;
        try {
          const firestoreUser = await fetchUserById(userId, db); // Fetch Firestore user data
          if (firestoreUser) {
            setUser(firestoreUser); // Set user with complete data
          } else {
            console.warn(`No user document found for userId: ${userId}`);
            setUser(null);
          }
        } catch (error) {
          console.error('Error fetching user document:', error);
        }
      } else {
        setUser(null); // No user signed in
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [fetchUserById]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        db,
        auth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

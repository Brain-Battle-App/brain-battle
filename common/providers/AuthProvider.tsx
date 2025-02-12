import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { auth, db } from '../../lib/firebaseConfig';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User as FirebaseUser,
} from 'firebase/auth';
import { useFetchUserById } from '../hooks/queries/useFetchUserById';

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

import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from 'react';
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
  const { fetchUserById } = useFetchUserById();

  // Memoize the auth state change handler
  const handleAuthStateChange = useCallback(
    async (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        const userId = firebaseUser.uid;
        try {
          const firestoreUser = await fetchUserById(userId, db);
          if (firestoreUser) {
            setUser(firestoreUser);
          } else {
            console.warn(`No user document found for userId: ${userId}`);
            setUser(null);
          }
        } catch (error) {
          console.error('Error fetching user document:', error);
          setUser(null);
        }
      } else {
        setUser(null);
      }
    },
    [fetchUserById]
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, handleAuthStateChange);
    return () => unsubscribe();
  }, [handleAuthStateChange]);

  // Memoize the context value
  const contextValue = useMemo(
    () => ({
      user,
      setUser,
      signInWithEmailAndPassword,
      createUserWithEmailAndPassword,
      db,
      auth,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

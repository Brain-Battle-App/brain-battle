import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { useFirebaseContext } from '../hooks/context/useFirebaseContext';
import Constants from 'expo-constants';

interface PlayContextProps {
  currentGame: Game | null;
  setCurrentGame: (game: Game) => void;
  testType: string;
  setTestType: (testType: string) => void;
  subject: string;
  setSubject: (subject: string) => void;
  gameType: string;
  setGameType: (gameType: string) => void;
}

export const PlayContext = createContext<PlayContextProps | null>(null);

export const PlayProvider = ({ children }: { children: ReactNode }) => {
  const [currentGame, setCurrentGame] = useState<Game | null>(null);
  const [testType, setTestType] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [gameType, setGameType] = useState<string>('multiplayer');

  const { db } = useFirebaseContext();

  // Firestore listener for currentGame
  useEffect(() => {
    if (!currentGame?.id) return;

    const gameRef = doc(db, 'games', currentGame.id);

    console.log(
      `[${Constants.deviceName}] Listening to Firestore document:`,
      gameRef.path
    );

    const unsubscribe = onSnapshot(
      gameRef,
      (snapshot) => {
        console.log(
          `[${Constants.deviceName}] Firestore snapshot updated:`,
          snapshot.data()
        );
        if (snapshot.exists()) {
          setCurrentGame({ ...snapshot.data(), id: snapshot.id } as Game);
        } else {
          console.warn(`[${Constants.deviceName}] Document does not exist.`);
          setCurrentGame(null);
        }
      },
      (error) => {
        console.error(
          `[${Constants.deviceName}] Firestore snapshot error:`,
          error
        );
      }
    );

    return () => unsubscribe();
  }, [currentGame?.id]);

  return (
    <PlayContext.Provider
      value={{
        currentGame,
        setCurrentGame,
        testType,
        setTestType,
        subject,
        setSubject,
        gameType,
        setGameType,
      }}
    >
      {children}
    </PlayContext.Provider>
  );
};

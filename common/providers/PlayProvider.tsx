import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { useAuthContext } from '../hooks/context/useAuthContext';
import { useFetchUserById } from '../hooks/queries/useFetchUserById';
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
  opponentUser: User | null;
}

export const PlayContext = createContext<PlayContextProps | null>(null);

export const PlayProvider = ({ children }: { children: ReactNode }) => {
  const [currentGame, setCurrentGame] = useState<Game | null>(null);
  const [testType, setTestType] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [gameType, setGameType] = useState<string>('multiplayer');
  const [opponentUser, setOpponentUser] = useState<User | null>(null);

  const { db, user } = useAuthContext();
  const { fetchUserById } = useFetchUserById();

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
      async (snapshot) => {
        if (snapshot.exists()) {
          const gameData = { ...snapshot.data(), id: snapshot.id } as Game;

          // Fetch opponent data if needed
          const opponentPlayer = gameData.players.find(
            (player) => player.userId !== user?.userId
          );

          let opponentUser = null;
          if (opponentPlayer?.userId) {
            opponentUser = await fetchUserById(opponentPlayer.userId, db);
          }
          setOpponentUser(opponentUser);

          setCurrentGame({ ...gameData });
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
        opponentUser,
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

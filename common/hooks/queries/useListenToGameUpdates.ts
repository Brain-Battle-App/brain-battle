import { useAuthContext } from '../context/useAuthContext';
import { doc, onSnapshot } from 'firebase/firestore';

export const useListenToGameUpdates = () => {
  const { db } = useAuthContext();

  const listenToGameUpdates = (
    gameId: string,
    callback: (game: any) => void
  ) => {
    const gameDoc = doc(db, 'games', gameId);

    const unsubscribe = onSnapshot(gameDoc, (snapshot) => {
      if (snapshot.exists()) {
        callback({ id: snapshot.id, ...snapshot.data() });
      }
    });

    return unsubscribe;
  };

  return { listenToGameUpdates };
};

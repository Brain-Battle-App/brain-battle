import { useAuthContext } from '../context/useAuthContext';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';

export const useRecordAction = () => {
  const { db } = useAuthContext();

  const recordAction = async (
    gameId: string,
    userId: string,
    action: string
  ) => {
    const gameDoc = doc(db, 'games', gameId);

    await updateDoc(gameDoc, {
      actions: arrayUnion({ userId, action, timestamp: Date.now() }),
    });
  };

  return { recordAction };
};

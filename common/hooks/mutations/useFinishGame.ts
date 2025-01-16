import { useAuthContext } from '../context/useAuthContext';
import { doc, updateDoc } from 'firebase/firestore';

export const useFinishGame = () => {
  const { db } = useAuthContext();

  const finishGame = async (gameId: string) => {
    const gameDoc = doc(db, 'games', gameId);

    await updateDoc(gameDoc, { status: 'finished' });
  };

  return { finishGame };
};

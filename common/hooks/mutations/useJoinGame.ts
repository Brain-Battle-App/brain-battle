import { useFirebaseContext } from '../context/useFirebaseContext';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';

export const useJoinGame = () => {
  const { db } = useFirebaseContext();

  const joinGame = async (gameId: string, user: User) => {
    const gameDoc = doc(db, 'games', gameId);

    await updateDoc(gameDoc, {
      status: 'lobby',
      players: arrayUnion({
        userId: user.userId,
        ready: false,
        points: 0,
        totalScore: user.totalScore,
      }),
    });
  };

  return { joinGame };
};

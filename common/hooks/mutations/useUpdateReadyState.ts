import { useAuthContext } from '../context/useAuthContext';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

export const useUpdateReadyState = () => {
  const { db } = useAuthContext();

  const updateReadyState = async (
    gameId: string,
    userId: string,
    ready: boolean
  ) => {
    const gameDoc = doc(db, 'games', gameId);
    const gameSnapshot = await getDoc(gameDoc);
    const gameData = gameSnapshot.data();

    if (gameData) {
      const updatedPlayers = gameData.players.map((player: any) =>
        player.userId === userId ? { ...player, ready } : player
      );

      await updateDoc(gameDoc, { players: updatedPlayers });
    }
  };

  return { updateReadyState };
};

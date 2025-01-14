import { useFirebaseContext } from '../context/useAuthContext';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const useFindAvailableGame = () => {
  const { db } = useFirebaseContext();

  const findAvailableGame = async (userId: string): Promise<Game | null> => {
    try {
      const gamesCollection = collection(db, 'games');
      const gamesQuery = query(
        gamesCollection,
        where('status', 'in', ['searching'])
      );
      const querySnapshot = await getDocs(gamesQuery);

      if (!querySnapshot.empty) {
        // Map Firestore documents to Game objects
        const availableGame = querySnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }) as Game) // Explicitly cast to Game
          .find(
            (game) => !game.players.some((player) => player.userId === userId)
          ); // Check userId in players

        if (availableGame) {
          return availableGame;
        }
      }

      // Return null if no games match the query
      return null;
    } catch (error) {
      console.error('Error finding available game:', error);
      throw new Error('Failed to find an available game.');
    }
  };

  return { findAvailableGame };
};

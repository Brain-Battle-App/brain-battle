import { useAuthContext } from '../context/useAuthContext';
import { collection, query, where, getDocs } from 'firebase/firestore';

interface GameData {
  testType: string;
  subject: string;
}

export const useFindAvailableGame = () => {
  const { db } = useAuthContext();

  const findAvailableGame = async (
    userId: string,
    gameData: GameData
  ): Promise<Game | null> => {
    try {
      const gamesCollection = collection(db, 'games');
      const gamesQuery = query(
        gamesCollection,
        where('status', 'in', ['searching']),
        where('testType', '==', gameData.testType), // Filter by testType
        where('subject', '==', gameData.subject) // Filter by subject
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

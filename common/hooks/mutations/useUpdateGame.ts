import { useAuthContext } from '../context/useAuthContext';
import { doc, updateDoc } from 'firebase/firestore';

interface UpdatedGame {
  id: string; // The document ID of the game to update
  [key: string]: any; // Additional fields that may be updated
}

export const useUpdateGame = () => {
  const { db } = useAuthContext();

  const updateGame = async (updatedGame: UpdatedGame) => {
    if (!updatedGame.id) {
      throw new Error('Game ID is required to update the document.');
    }

    try {
      // Reference the specific document to update
      const gameDocRef = doc(db, 'games', updatedGame.id);

      // Remove the `id` field from the data to avoid overwriting it in Firestore
      const { id, ...dataToUpdate } = updatedGame;
      console.log('Data to update:', dataToUpdate);
      // Update the document in Firestore
      await updateDoc(gameDocRef, dataToUpdate);

      return { id, ...dataToUpdate };
    } catch (error) {
      console.error('Error updating game:', error);
      throw new Error('Failed to update game.');
    }
  };

  return { updateGame };
};

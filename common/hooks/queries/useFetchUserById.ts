import { doc, getDoc, Firestore } from 'firebase/firestore';
import { useCallback } from 'react';

export const useFetchUserById = () => {
  const fetchUserById = useCallback(
    async (userId: string, db: Firestore): Promise<User | null> => {
      const userDocRef = doc(db, 'users', userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const data = userDoc.data();
        return {
          userId,
          createdAt: data.createdAt,
          losses: data.loss,
          profilePicture: data.profilePicture,
          rank: data.rank,
          elo: data.elo,
          username: data.username,
          lives: data.lives,
          wins: data.win,
        };
      }

      return null;
    },
    []
  ); // No dependencies since it doesn't use any external values

  return { fetchUserById };
};

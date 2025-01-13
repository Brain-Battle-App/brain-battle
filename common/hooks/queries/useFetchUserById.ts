import { useFirebaseContext } from '../context/useFirebaseContext';
import { doc, getDoc } from 'firebase/firestore';

interface User {
  userId: string;
  createdAt: string;
  losses: number;
  profilePicture: string;
  rank: string;
  totalScore: number;
  username: string;
  wins: number;
}

export const useFetchUserById = () => {
  const { db } = useFirebaseContext();

  const fetchUserById = async (userId: string): Promise<User | null> => {
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
        totalScore: data.totalScore,
        username: data.username,
        wins: data.win,
      };
    }

    return null;
  };

  return { fetchUserById };
};

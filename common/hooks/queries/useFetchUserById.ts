import { doc, getDoc, Firestore } from 'firebase/firestore';

export const useFetchUserById = () => {
  const fetchUserById = async (
    userId: string,
    db: Firestore
  ): Promise<User | null> => {
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

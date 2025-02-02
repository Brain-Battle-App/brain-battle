import { useAuthContext } from '../context/useAuthContext';
import { doc, getDoc } from 'firebase/firestore';

export const useFetchGameById = () => {
  const { db } = useAuthContext();

  const fetchGameById = async (gameId: string) => {
    const gameDoc = doc(db, 'games', gameId);
    const docSnapshot = await getDoc(gameDoc);

    if (docSnapshot.exists()) {
      return { id: docSnapshot.id, ...docSnapshot.data() };
    }

    return null;
  };

  return { fetchGameById };
};

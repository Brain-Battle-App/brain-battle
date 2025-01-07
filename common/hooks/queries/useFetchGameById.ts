import { useFirebaseContext } from "../context/useFirebaseContext";
import { doc, getDoc } from "firebase/firestore";

export const useFetchGameById = () => {
  const { db } = useFirebaseContext();

  const fetchGameById = async (gameId: string) => {
    const gameDoc = doc(db, "games", gameId);
    const docSnapshot = await getDoc(gameDoc);

    if (docSnapshot.exists()) {
      return { id: docSnapshot.id, ...docSnapshot.data() };
    }

    return null;
  };

  return { fetchGameById };
};

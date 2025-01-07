import { useFirebaseContext } from "../context/useFirebaseContext";
import { collection, query, where, getDocs } from "firebase/firestore";

export const useFindAvailableGame = () => {
    const { db } = useFirebaseContext();
  
    const findAvailableGame = async () => {
      const gamesCollection = collection(db, "games");
      const gamesQuery = query(gamesCollection, where("status", "in", ["searching"]));
      const querySnapshot = await getDocs(gamesQuery);
  
      if (!querySnapshot.empty) {
        const gameDoc = querySnapshot.docs[0];
        return { id: gameDoc.id, ...gameDoc.data() };
      }
  
      return null;
    };
  
    return { findAvailableGame };
  };
import { useFirebaseContext } from "../context/useFirebaseContext";
import { collection, addDoc } from "firebase/firestore";

export const useCreateGame = () => {
  const { db } = useFirebaseContext();

  const createGame = async (userId: string) => {
    const newGame = {
      status: "searching",
      players: [{ userId, ready: false, points: 0 }],
    };

    const gamesCollection = collection(db, "games");
    const gameDoc = await addDoc(gamesCollection, newGame);

    return { id: gameDoc.id, ...newGame };
  };

  return { createGame };
};

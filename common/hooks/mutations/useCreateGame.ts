import { useFirebaseContext } from "../context/useFirebaseContext";
import { collection, addDoc } from "firebase/firestore";

type NewGame = Omit<Game, "id">;

export const useCreateGame = () => {
  const { db } = useFirebaseContext();

  const createGame = async (userId: string) => {
    const newGame: NewGame = {
      status: "searching",
      players: [{ userId, ready: false, points: 0 }],
    };

    const gamesCollection = collection(db, "games");
    const gameDoc = await addDoc(gamesCollection, newGame);
    console.log("gameDoc in create", gameDoc);

    return { id: gameDoc.id, ...newGame };
  };

  return { createGame };
};

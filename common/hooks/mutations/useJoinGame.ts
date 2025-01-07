import { useFirebaseContext } from "../context/useFirebaseContext";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

export const useJoinGame = () => {
  const { db } = useFirebaseContext();

  const joinGame = async (gameId: string, userId: string) => {
    const gameDoc = doc(db, "games", gameId);

    await updateDoc(gameDoc, {
      players: arrayUnion({ userId, ready: false, points: 0 }),
    });
  };

  return { joinGame };
};

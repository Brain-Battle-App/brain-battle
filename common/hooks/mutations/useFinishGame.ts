import { useFirebaseContext } from "../context/useFirebaseContext";
import { doc, updateDoc } from "firebase/firestore";

export const useFinishGame = () => {
  const { db } = useFirebaseContext();

  const finishGame = async (gameId: string) => {
    const gameDoc = doc(db, "games", gameId);

    await updateDoc(gameDoc, { status: "finished" });
  };

  return { finishGame };
};

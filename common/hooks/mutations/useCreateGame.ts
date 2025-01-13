import { useFirebaseContext } from '../context/useFirebaseContext';
import { collection, addDoc } from 'firebase/firestore';

type NewGame = Omit<Game, 'id'>;

export const useCreateGame = () => {
  const { db } = useFirebaseContext();

  const createGame = async (user: User) => {
    const newGame: NewGame = {
      status: 'searching',
      players: [
        {
          userId: user.userId,
          ready: false,
          points: 0,
          totalScore: user.totalScore,
        },
      ],
    };
    console.log('newGame in create', newGame);
    const gamesCollection = collection(db, 'games');
    const gameDoc = await addDoc(gamesCollection, newGame);
    console.log('gameDoc in create', gameDoc);

    return { id: gameDoc.id, ...newGame };
  };

  return { createGame };
};

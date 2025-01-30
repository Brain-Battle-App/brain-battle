import { useAuthContext } from '../context/useAuthContext';
import { collection, addDoc } from 'firebase/firestore';

type NewGame = Omit<Game, 'id'>;
interface GameData {
  testType: string;
  subject: string;
}

export const useCreateGame = () => {
  const { db } = useAuthContext();

  const createGame = async (user: User, gameData: GameData) => {
    const newGame: NewGame = {
      status: 'searching',
      testType: gameData.testType,
      subject: gameData.subject,
      players: [
        {
          userId: user.userId,
          ready: false,
          points: 0,
          profilePicture: user.profilePicture,
        },
      ],
    };

    const gamesCollection = collection(db, 'games');
    const gameDoc = await addDoc(gamesCollection, newGame);

    return { id: gameDoc.id, ...newGame };
  };

  return { createGame };
};

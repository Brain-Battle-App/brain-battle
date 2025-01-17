import { collection, query, where, limit, getDocs } from 'firebase/firestore';
import { useAuthContext } from '@/common/hooks/context/useAuthContext';

const fetchQuestions = async (testType: string, subject: string) => {
  const { db } = useAuthContext();

  try {
    const questionsRef = collection(
      db,
      `tests/${testType}/subjects/${subject}/questions`
    );
    const q = query(questionsRef, limit(8)); // Fetch 8 questions
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error; // Propagate error for handling
  }
};

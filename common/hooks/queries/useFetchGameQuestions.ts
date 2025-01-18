import {
  collection,
  query,
  where,
  limit,
  getDocs,
  Firestore,
  DocumentData,
} from 'firebase/firestore';

export const useFetchGameQuestions = () => {
  const fetchGameQuestions = async (
    db: Firestore,
    testType: string,
    subject: string
  ): Promise<Question[]> => {
    console.log('Fetching questions for:', testType, subject);

    try {
      const questionsRef = collection(
        db,
        `tests/${testType}/subjects/${subject}/questions`
      );
      const q = query(questionsRef, limit(8)); // Fetch 8 questions
      const querySnapshot = await getDocs(q);

      // Map the data to the Question type
      return querySnapshot.docs.map((doc) => {
        const data = doc.data() as DocumentData; // Firestore document data
        return {
          id: doc.id,
          question: data.question,
          answers: data.answers,
          correctAnswer: data.correctAnswer,
          contentArea: data.contentArea, // Optional
          difficulty: data.difficulty, // Optional
        } as Question; // Explicitly type each mapped object as Question
      });
    } catch (error) {
      console.error('Error fetching questions:', error);
      throw error; // Propagate error for handling
    }
  };

  return { fetchGameQuestions };
};

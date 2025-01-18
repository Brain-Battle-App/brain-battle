interface Player {
  ready: boolean;
  points: number;
  userId: string;
}

interface Game {
  id: string;
  status: 'searching' | 'lobby' | 'active' | 'finished';
  testType: string;
  subject: string;
  players: Player[];
  questions: Question[] | null;
}

interface Question {
  answers: string[];
  correctAnswer: string;
  question: string;
  contentArea: string;
  explanation?: string;
}

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
}

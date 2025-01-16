interface Player extends User {
  ready: boolean;
  points: number;
}

interface Game {
  id: string;
  status: 'searching' | 'lobby' | 'active' | 'finished';
  players: Player[];
}

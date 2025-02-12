interface IconProps {
  height?: number;
  width?: number;
  className?: string;
  color?: string;
}

interface User {
  userId: string; // Firestore document ID, tied to Firebase Auth UID
  createdAt: string;
  losses: number;
  profilePicture: string;
  rank: string;
  elo: number;
  username: string;
  wins: number;
  lives: number;
  streakData: StreakData;
}

interface StreakData {
  currentStreak: number;
  completedDays: {
    seconds: number;
    nanoseconds: number;
  }[];
  longestStreak: number;
  lastUpdated: Date;
}

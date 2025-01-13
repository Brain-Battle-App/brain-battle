interface IconProps {
  height?: number;
  width?: number;
  className?: string;
}

interface User {
  userId: string; // Corresponds to the Firestore document ID, tied to the Firebase Auth UID
  createdAt: string;
  losses: number;
  profilePicture: string;
  rank: string;
  totalScore: number;
  username: string;
  wins: number;
}

// providers/UserProvider.tsx
import React, { createContext, ReactNode, useState} from "react";

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

interface UserContextProps {
    user: User | null;
    setUser: (user: User) => void;
}

export const UserContext = createContext<UserContextProps | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider
          value={{ user, setUser}}
        >
          {children}
        </UserContext.Provider>
      );
    };
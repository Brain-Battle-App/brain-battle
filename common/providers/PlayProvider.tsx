// providers/PlayProvider.tsx
import React, { createContext, ReactNode, useContext, useState, useEffect } from "react";

interface Player {
  userId: string;
  ready: boolean;
  points: number;
}

interface Game {
  id: string;
  status: "searching" | "lobby" | "active" | "finished";
  players: Player[];
} 

interface PlayContextProps {
  currentGame: Game | null;
  setCurrentGame: (game: Game) => void;
}

export const PlayContext = createContext<PlayContextProps | null>(null);

export const PlayProvider = ({ children }: { children: ReactNode }) => {
    const [currentGame, setCurrentGame] = useState<Game | null>(null);

    return (
        <PlayContext.Provider
          value={{ currentGame, setCurrentGame }}
        >
          {children}
        </PlayContext.Provider>
      );
    };
// Hook to access Firebase context
import { useContext } from "react";
import {PlayContext} from "../../providers/PlayProvider";

export const usePlayContext = () => {
    const context = useContext(PlayContext);
    if (!context) {
      throw new Error("usePlayContext must be used within a PlayProvider");
    }
    return context;
  };
  
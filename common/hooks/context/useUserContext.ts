// Hook to access Firebase context
import { useContext } from "react";
import {UserContext} from "../../providers/UserProvider";

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
  };
  
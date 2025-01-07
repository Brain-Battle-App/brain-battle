// Hook to access Firebase context
import { useContext } from "react";
import {FirebaseContext} from "../../providers/FirebaseProvider";

export const useFirebaseContext = () => {
    const context = useContext(FirebaseContext);
    if (!context) {
      throw new Error("useFirebase must be used within a FirebaseProvider");
    }
    return context;
  };
  
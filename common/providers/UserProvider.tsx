// providers/UserProvider.tsx
import React, { createContext, ReactNode, useState } from 'react';

interface UserContextProps {
  user: User | null;
  setUser: (user: User) => void;
}

export const UserContext = createContext<UserContextProps | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

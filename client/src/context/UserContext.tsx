import React, { createContext, useContext, useState} from 'react';
import type { ReactNode } from 'react';
import type { ClassType } from '../types/characters';

type UserData = {
    userId: string;
    name: string;
    class: ClassType;
    image: string;
    level: number;
    hp: number;
    gold: number;
    inventory: string[];
}

type UserContextType = {
    user: UserData | null;
    setUser: React.Dispatch<React.SetStateAction<UserData | null>>;
};

const defaultUser: UserData = {
    userId: '',
    name: '',
    class: 'Warrior',
    image: '',
    level: 1,
    hp: 100,
    gold: 0,
    inventory: [],
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<UserData | null>(defaultUser);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
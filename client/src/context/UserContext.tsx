import React, { createContext, useContext, useEffect, useState} from 'react';
import type { ReactNode } from 'react';
import type { Character } from '../types/characters';


type UserContextType = {
    user: Character[] | null;
    setUser: React.Dispatch<React.SetStateAction<Character[] | null>>;
    logout: () => void;
    getHp: (vitality: number) => number;
    getDamage: (strength: number) => number;
    loading : boolean;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<Character[] | null>([]);
    const [loading, setLoading] = useState(true);
    
    //load user from local storage 
    useEffect(() => {
        const stored = localStorage.getItem('user')
        if (stored) {
            setUser(JSON.parse(stored))
        }
        setLoading(false)
    },[])

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const getHp = (vitality: number) => {
        return Math.floor((vitality) * 10);
    }

    const getDamage = (strength: number) => {
        return Math.floor((strength) * 2);
    }
    
    return (
        <UserContext.Provider value={{ user, setUser , logout, getHp, loading, getDamage }}>
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
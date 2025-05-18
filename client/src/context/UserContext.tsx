import React, { createContext, useContext, useEffect, useState} from 'react';
import type { ReactNode } from 'react';
import type { Character } from '../types/characters';
import { useNavigate } from 'react-router-dom';


type UserContextType = {
    user: Character[] ;
    setUser: React.Dispatch<React.SetStateAction<Character[]>>;
    logout: () => void;
    loading : boolean;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    //load user from local storage 
    useEffect(() => {
        const stored = localStorage.getItem('user')
        if (stored) {
            setUser(JSON.parse(stored))
        }
        setLoading(false)
    },[])

    const logout = () => {
        setUser([]);
        localStorage.removeItem('user');
        navigate('/')
    };

    return (
        <UserContext.Provider value={{ user, setUser , logout, loading,  }}>
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
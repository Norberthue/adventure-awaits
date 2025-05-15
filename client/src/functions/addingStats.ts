 import type { Character } from "../types/characters";

 export const addVit = (user: Character[] | null, setUser: React.Dispatch<React.SetStateAction<Character[] | null>>) => {
    
    if (!user) return;
    const updatedUser = user.map((data) => (data.vitality ? { ...data, vitality: data.vitality + 1 } : data));
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));

}

export const addStr = (user: Character[] | null, setUser: React.Dispatch<React.SetStateAction<Character[] | null>>) => {
    
    if (!user) return;
    const updatedUser = user.map((data) => (data.strength ? { ...data, strength: data.strength + 1 } : data));
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));

}

export const addInt = (user: Character[] | null, setUser: React.Dispatch<React.SetStateAction<Character[] | null>>) => {
    
    if (!user) return;
    const updatedUser = user.map((data) => (data.intelligence ? { ...data, intelligence: data.intelligence + 1 } : data));
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));

}

export const addDex = (user: Character[] | null, setUser: React.Dispatch<React.SetStateAction<Character[] | null>>) => {
    
    if (!user) return;
    const updatedUser = user.map((data) => (data.dexterity ? { ...data, dexterity: data.dexterity + 1 } : data));
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));

}

export const addLck = (user: Character[] | null, setUser: React.Dispatch<React.SetStateAction<Character[] | null>>) => {
    
    if (!user) return;
    const updatedUser = user.map((data) => (data.luck ? { ...data, luck: data.luck + 1 } : data));
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));

}


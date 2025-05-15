import { useUser} from '../context/UserContext';
import type { ClassType } from "../types/characters"

export const getDmg= (classType: ClassType) => {
    const { user } = useUser();
    if (!user || !user[0]) {
        return 0;
    }
    switch (classType) {
        case 'Warrior':
            return user[0].strength * 3;
        case 'Mage':
            return user[0].intelligence * 2;
        case 'Hunter':
            return user[0].dexterity * 4;
        
    }
}

export const getHp = (classType: ClassType) => {
    const { user } = useUser();
    if (!user || !user[0]) {
        return 0;
    }
    switch (classType) {
        case 'Warrior':
            return user[0].vitality * 5;
        case 'Mage':
            return user[0].vitality * 2;
        case 'Hunter':
            return user[0].vitality * 3;
        
    }
}
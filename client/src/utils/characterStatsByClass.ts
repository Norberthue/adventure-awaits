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


export const getDefense = (classType: ClassType) => {
    const { user } = useUser();
    if (!user || !user[0]) {
        return 0;
    }
    switch (classType) {
        case 'Mage':
            return user[0].strength / 2;
        case 'Hunter':
            return user[0].strength / 2;
        
    }
}

export const getEvasion = (classType: ClassType) => {
    const { user } = useUser();
    if (!user || !user[0]) {
        return 0;
    }
    switch (classType) {
        case 'Mage':
            return user[0].dexterity / 2;
        case 'Warrior':
            return user[0].dexterity / 2;
        
    }
}

export const getResistence = (classType: ClassType) => {
    const { user } = useUser();
    if (!user || !user[0]) {
        return 0;
    }
    switch (classType) {
        case 'Hunter':
            return user[0].intelligence / 2;
        case 'Warrior':
            return user[0].intelligence / 2;
        
    }
}

export const getCrit = (classType: ClassType) => {
    const { user } = useUser();
    if (!user || !user[0]) {
        return 0;
    }
    switch (classType) {
        case 'Warrior':
            return user[0].luck * 5;
        case 'Mage':
            return user[0].luck * 5;
        case 'Hunter':
            return user[0].luck * 5;
        
    }
}

export const getDmgRed = (classType: ClassType) => {
    const { user } = useUser();
    if (!user || !user[0]) {
        return 0;
    }
    switch (classType) {
        case 'Warrior':
            return user[0].armor * 5;
        case 'Mage':
            return user[0].armor * 5;
        case 'Hunter':
            return user[0].armor * 5;
        
    }
}
import type { Character, ClassType } from "../types/characters"

export const getDmg= (classType: ClassType , user: Character[]) => {
    if (!user || !user[0]) {
        return 0;
    }
    switch (classType) {
        case 'Warrior':
            return user[0].strength * 5 
        case 'Mage':
            return user[0].intelligence * 2;
        case 'Hunter':
            return user[0].dexterity * 4;
        
    }
}

export const getHp = (classType: ClassType, user: Character[]) => {
    if (!user || !user[0]) {
        return 0;
    }
    switch (classType) {
        case 'Warrior':
            return user[0].vitality * 5 * (user[0].level + 1);
        case 'Mage':
            return user[0].vitality * 2 * (user[0].level + 1);
        case 'Hunter':
            return user[0].vitality * 4 * (user[0].level + 1);
        
    }
}


export const getDefense = (classType: ClassType, user: Character[]) => {
    if (!user || !user[0]) {
        return 0;
    }
    switch (classType) {
        case 'Mage':
            return Math.round(user[0].strength / 2);
        case 'Hunter':
            return Math.round(user[0].strength / 2);
        
    }
}

export const getEvasion = (classType: ClassType, user: Character[]) => {
    if (!user || !user[0]) {
        return 0;
    }
    switch (classType) {
        case 'Mage':
            return Math.round(user[0].dexterity / 2);
        case 'Warrior':
            return Math.round(user[0].dexterity / 2);
        
    }
}

export const getResistence = (classType: ClassType, user: Character[]) => {
    if (!user || !user[0]) {
        return 0;
    }
    switch (classType) {
        case 'Hunter':
            return Math.round(user[0].intelligence / 2);
        case 'Warrior':
            return Math.round(user[0].intelligence / 2);
        
    }
}

export const getCrit = (classType: ClassType, user: Character[]) => {
    if (!user || !user[0]) {
        return 0;
    }
    switch (classType) {
        case 'Warrior':
            return Math.min((user[0].luck * 5) / (user[0].level * 2) / 100, 50);
        case 'Mage':
            return  Math.min((user[0].luck * 5) / (user[0].level * 2) / 100, 50);
        case 'Hunter':
            return  Math.min((user[0].luck * 5) / (user[0].level * 2) / 100, 50);
        
    }
}

export const getDmgRed = (classType: ClassType, user: Character[]) => {
    if (!user || !user[0]) {
        return 0;
    }
    switch (classType) {
        case 'Warrior':
            return Math.min((user[0].armor * 5) / (user[0].level * 2) / 100 ,50)
        case 'Mage':
            return Math.min((user[0].armor * 5)  / (user[0].level * 2)  / 100 ,10)
        case 'Hunter':
            return Math.min((user[0].armor * 5)  / (user[0].level * 2)  / 100 ,25)
        
    }
}
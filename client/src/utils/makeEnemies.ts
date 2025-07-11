import type { Enemies } from "../types/enemies";
import type { ClassType } from "../types/characters";


export const makeEnemies = (p_lvl: number): Enemies[] => {
    const enemies = [];
    for (let i = 0; i < 3; i++) {
        const level = p_lvl + i;
        const classType = (['Warrior', 'Hunter', 'Mage'][i % 3] as ClassType)
        // Helper to randomize a stat with scaling
        const randomize = (base: number, scale: number, variance: number = 0.15) => {
            const scaled = base + scale * level;
            const min = Math.floor(scaled * (1 - variance));
            const max = Math.ceil(scaled * (1 + variance));
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        
        const vitality = (type: ClassType) => {
            switch (type) {
                case 'Warrior':
                    return randomize(10, 2); 
                case 'Hunter':
                    return randomize(8, 1); 
                case 'Mage':
                    return randomize(6, 1); 
            }
        }

        const strength = (type: ClassType) => {
            switch (type) {
                case 'Warrior':
                    return randomize(10, 2); 
                case 'Hunter':
                    return randomize(6, 1); 
                case 'Mage':
                    return randomize(5, 1); 
            }
        }

        const dexterity = (type: ClassType) => {
            switch (type) {
                case 'Warrior':
                    return randomize(8, 2); // Warriors have high vitality
                case 'Hunter':
                    return randomize(6, 1); 
                case 'Mage':
                    return randomize(5, 1); 
            }
        }

        const intelligence = (type: ClassType) => {
            switch (type) {
                case 'Warrior':
                    return randomize(5, 1); 
                case 'Hunter':
                    return randomize(6, 1); 
                case 'Mage':
                    return randomize(10, 2); 
            }
        }
        const luck = (type: ClassType) => {
            switch (type) {
                case 'Warrior':
                    return randomize(6, 2); 
                case 'Hunter':
                    return randomize(6, 1); 
                case 'Mage':
                    return randomize(10, 1); 
            }
        }

        const armor = (type: ClassType) => {
            switch (type) {
                case 'Warrior':
                    return randomize(10, 2); 
                case 'Hunter':
                    return randomize(6, 1); 
                case 'Mage':
                    return randomize(5, 1); 
            }
        }

        const damage = (type: ClassType) => {
            switch (type) {
                case 'Warrior':
                    return randomize(strength(type), 5); 
                case 'Hunter':
                    return randomize(dexterity(type), 4); 
                case 'Mage':
                    return randomize(intelligence(type), 2); 
            }
        }

        const hp = vitality(classType) * (level + 1) * 5; // HP scales with level and vitality
       
        
        // Generate unique random numbers between 10 and 42 for enemy images
        const usedImages: number[] = enemies.map(e => e.image.match(/con(\d+)\.png/)?.[1]).filter(Boolean).map(Number);
        let imgNum: number;
        do {
            imgNum = Math.floor(Math.random() * (42 - 10 + 1)) + 10;
        } while (usedImages.includes(imgNum));

        // Generate a random enemy name
        const enemyNames = [
            "Gorath", "Zyra", "Morgul", "Tharn", "Vexis", "Drak", "Lira", "Skar", "Vorin", "Zarn",
            "Krag", "Mira", "Sable", "Riven", "Nyx", "Orin", "Vara", "Jax", "Kira", "Drax"
        ];
        // Ensure unique name per enemy in this batch
        const usedNames: string[] = enemies.map(e => e.name);
        let name: string;
        do {
            name = enemyNames[Math.floor(Math.random() * enemyNames.length)];
        } while (usedNames.includes(name));

        let wNum: number;
        const enemy = {
            name,
            level,
            hp,
            maxHp: hp,
            image: `/assets/enemies/con${imgNum}.png`, 
            weapon: `/assets/weapons/Icon28${wNum}.png`, 
            classType,
            intelligence: intelligence(classType),
            damage: damage(classType),
            vitality: vitality(classType),
            dexterity: dexterity(classType),
            strength: strength(classType),
            luck: luck(classType),
            armor: armor(classType),
        };
        enemies.push(enemy);
    }
    return enemies;
};
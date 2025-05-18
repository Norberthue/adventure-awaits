import type { Enemies } from "../types/enemies";
import type { ClassType } from "../types/characters";


export const makeEnemies = (p_lvl: number): Enemies[] => {
    const enemies = [];
    for (let i = 0; i < 3; i++) {
        const level = p_lvl + i;
        const vitality = 10 + level * 2;
        
        // Helper to randomize a stat with scaling
        const randomize = (base: number, scale: number, variance: number = 0.15) => {
            const scaled = base + scale * level;
            const min = Math.floor(scaled * (1 - variance));
            const max = Math.ceil(scaled * (1 + variance));
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        // Generate unique random numbers between 10 and 42 for enemy images
        const usedImages: number[] = enemies.map(e => e.image.match(/con(\d+)\.png/)?.[1]).filter(Boolean).map(Number);
        let imgNum: number;
        do {
            imgNum = Math.floor(Math.random() * (42 - 10 + 1)) + 10;
        } while (usedImages.includes(imgNum));

        const enemy = {
            level,
            hp: randomize(10, vitality, 0.1) * 10,
            image: `/assets/enemies/con${imgNum}.png`, 
            class: (['Warrior', 'Hunter', 'Mage'][i % 3] as ClassType),
            intelligence: randomize(5, 1),
            attack: randomize(3, 1.5),
            vitality: randomize(10, 2),
            dexterity: randomize(5, 1),
            strength: randomize(8, 2),
            luck: randomize(5, 1),
            armor: randomize(2, 1),
        };
        enemies.push(enemy);
    }
    return enemies;
};
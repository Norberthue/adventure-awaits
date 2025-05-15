export type ClassType = 'Warrior' | 'Mage' | 'Hunter';

export interface Character {
  userId: string;
  name: string;
  class: ClassType;
  image: string;
  level: number;
  hp: number;
  vitality: number;
  strength: number;
  dexterity: number;
  intelligence: number;
  luck: number;
  attack: number;
  armor: number;
  gold: number;
  inventory: string[];
}
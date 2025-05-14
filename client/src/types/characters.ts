export type ClassType = 'Warrior' | 'Mage' | 'Archer';

export interface Character {
  userId: string;
  name: string;
  class: ClassType;
  image: string;
  level: number;
  hp: number;
  gold: number;
  inventory: string[];
}
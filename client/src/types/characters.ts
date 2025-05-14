export type ClassType = 'Warrior' | 'Mage' | 'Archer';

export interface Character {
  id: string;
  userId: string;
  name: string;
  class: ClassType;
  level: number;
  hp: number;
  gold: number;
  inventory: string[];
}
import type { ClassType } from "./characters";

export interface Enemies {
  name: string;
  class: ClassType;
  image: string;
  level: number;
  hp: number;
  maxHp: number;
  vitality: number;
  strength: number;
  dexterity: number;
  intelligence: number;
  luck: number;
  attack: number;
  armor: number;
}
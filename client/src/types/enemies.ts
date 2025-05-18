import type { ClassType } from "./characters";

export interface Enemies {
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
}
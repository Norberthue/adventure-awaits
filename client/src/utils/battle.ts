import type { Character } from "../types/characters";
import type { Enemies } from "../types/enemies";
import { getDmg, getDmgRed } from "./characterStatsByClass";


export function performAttackPlayer (user: Character[] ,attacker: Character, defender: Enemies, ) {
    
    let damage = getDmg(attacker.class, user);

    const isCrit = Math.random() < attacker.luck;

    if (isCrit) {
        damage = Math.floor(damage * 1.5);
    }

    // Reduce damage based on armor
    const damageReduction = defender.armor / 100;
    const reducedDamage = Math.max(1, Math.floor(damage * (1 - damageReduction)));
    
    return reducedDamage

  //   setAttackAnimation({
  //       from: attacker.name,
  //       type: 'slash',
  //       damage: reducedDamage,
  //       onHit: () => {
  //       defender.hp = Math.max(0, defender.hp - reducedDamage);
  //       onDamageDone();
  //       }
  // });
}


export function performAttackEnemy (user: Character[] ,attacker:  Enemies, defender: Character) {
  let damage = attacker.damage;
  console.log('attacker', damage)
  const isCrit = Math.random() < attacker.luck;

  if (isCrit) {
    damage = Math.floor(damage * 1.5);
  }

  // Reduce damage based on armor
  const damageReduction = getDmgRed(defender.class, user)
  const reducedDamage = Math.max(1, Math.floor(damage * (1 - damageReduction)));
  
  return reducedDamage

  // setAttackAnimation({
  //   from: attacker.name,
  //   type: 'fireball',
  //   damage: reducedDamage,
  //   onHit: () => {
  //     defender.hp = Math.max(0, defender.hp - reducedDamage);
  //     onDamageDone();
  //   }
  // });
}
import type { Character } from "../types/characters";
import type { Enemies } from "../types/enemies";
import { getDmg, getDmgRed } from "./characterStatsByClass";


export function performAttackPlayer (user: Character[] ,attacker: Character, defender: Enemies, setAttackAnimation: any, onDamageDone: (damage: number) => void) {
    
  if (attacker.hp <= 0 || defender.hp <= 0) return; 
    
    let damage = getDmg(attacker.class, user);

    const isCrit = Math.random() < attacker.luck;

    if (isCrit) {
        damage = Math.floor(damage * 1.5);
    }

    // Reduce damage based on armor
    const damageReduction = defender.armor / 100;
    const reducedDamage = Math.max(1, Math.floor(damage * (1 - damageReduction)));
    
    
    

      setAttackAnimation({
        from: attacker.name,
        type: 'slash',
        damage: reducedDamage,
        onHit: () => {
          if (defender.hp <= 0) return; // ⛔ In case HP changed mid-delay
          
          onDamageDone(reducedDamage);
        }
    });
   

    

  
  
}


export function performAttackEnemy (user: Character[] ,attacker:  Enemies, defender: Character, setAttackAnimation: any, onDamageDone: (damage: number) => void) {
  if (attacker.hp <= 0 || defender.hp <= 0) return; 
  
  let damage = attacker.damage;
  const isCrit = Math.random() < attacker.luck;
  
  if (isCrit) {
    damage = Math.floor(damage * 1.5);
  }
  
  // Reduce damage based on armor
  const damageReduction = getDmgRed(defender.class, user)
  const reducedDamage = Math.max(1, Math.floor(damage * (1 - damageReduction)));
  
  console.log('Enemy dmg :', reducedDamage)
  
  setAttackAnimation({
      from: attacker.name,
      type: 'fireball',
      damage: reducedDamage,
      onHit: () => {
        if (defender.hp <= 0) return; // ⛔ In case HP changed mid-delay
        
        onDamageDone(reducedDamage);
      }
  });

 
  
}
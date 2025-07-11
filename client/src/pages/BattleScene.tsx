import type { Enemies } from '../types/enemies'
import EnemyBattleCard from '../components/battle/EnemyBattleCard'
import PlayerBattleCard from '../components/battle/PlayerBattleCard'
import { useUser } from '../context/UserContext'
import {  useEffect, useState } from 'react'
import { performAttackEnemy , performAttackPlayer } from '../utils/battle'
import type { Character } from '../types/characters'
import { AnimatePresence, motion } from 'framer-motion'
interface BattleSceneProps {
    enemy: Enemies
    setEnemy: (enemy: any) => void; // Optional setter for the enemy
    }

const BattleScene = ({enemy ,setEnemy}: BattleSceneProps) => {
  const { user } = useUser()
  const [playerCopy, setPlayerCopy] = useState(JSON.parse(JSON.stringify(user[0])))
  const [attackAnimation, setAttackAnimation] = useState<any>(null);
  const [round, setRound] = useState(1);
  const [whoAttacks, setWhoAttacks] = useState(true)
 
  useEffect(() => {
    if (round === 0) return;
    if (playerCopy.hp <= 0 || enemy.hp <= 0) {
      // console.log('Battle ended');
      // Reset round and animations
      setRound(0);
      setAttackAnimation(null);
      return;
    }
    
    if (whoAttacks) {
      // Enemy attacks
        performAttackEnemy(user, enemy, playerCopy, setAttackAnimation, (damage) => {
          console.log('Damage done by enemy:', damage);
          setPlayerCopy((prev: Character) => ({
            ...prev,
            hp: Math.max(0, prev.hp - damage)
          }));
          setRound(prev => prev + 1);
          setWhoAttacks(false);
          if (playerCopy.hp <= 0 || enemy.hp <= 0) return
        });

     
    } else {        
      
        // Player attacks
         performAttackPlayer(user, playerCopy, enemy, setAttackAnimation, (damage) => {
          console.log('Damage done by player:', damage);
          setEnemy((prev: Enemies) => ({
            ...prev,
            hp: Math.max(0, prev.hp - damage)
          }));
          setRound(prev => prev + 1);
          setWhoAttacks(true);
          if (playerCopy.hp <= 0 || enemy.hp <= 0) return
        })
     
      
    }
}, [round]);

  return (
    <div className='flex justify-between gap-10'>
        <PlayerBattleCard player={playerCopy}/>
        <div className='flex items-end gap-5 '>
            <div className='bg-border-dark w-[60px] h-[60px] relative cursor-pointer duration-200 rounded-xl border-2 border-border-gray  hover:scale-110'>
              <img className='absolute top-1/2 left-[20px] -translate-y-1/2 ' src='./assets/images/Polygon.png'/>
            </div>
            <button className='bg-border-dark hover:scale-110 font-semibold cursor-pointer duration-200 rounded-xl border-2 border-border-gray w-[220px] h-[60px] pt-3 pb-3 pl-5 pr-5 text-text-y text-2xl'>Skip</button>
        </div>
        <EnemyBattleCard enemy={enemy}/>
        
      
        {attackAnimation && whoAttacks &&  (
          <motion.div
            key={Math.random()}
            initial={{
            x:  350,
            y: -100,
            opacity:  1
            }}
            animate={{
            x: -150,
            y: [ -100, -200, -100], // up, then down to baseline
            opacity: 1
            }}
            
            transition={{
            duration: 1,
            ease: "easeOut",
            }}
            className="absolute top-1/2 left-1/2 text-5xl text-red-600 z-50"
            onAnimationComplete={attackAnimation.onHit}
            >
            {'🔥'}
        </motion.div>
        )}

        {attackAnimation && !whoAttacks &&  (
          <motion.div
            key={Math.random()}
            
            initial={{
            x: -150 ,
            y: -100,
            opacity: 1
            }}

            animate={{
            x: 350,
            y: [ -100, -200, -100 ], // up, then down to baseline
            opacity: 1
            }}
            
            transition={{
            duration: 1,
            ease: "easeOut", 
            }}
            className="absolute top-1/2 left-1/2 text-5xl text-red-600 z-50"
            onAnimationComplete={attackAnimation.onHit}
            >
            
            <img className='w-15'  src={user[0].inventory.weapon.img}></img>
        </motion.div>
        )}
      
    </div>
  )
}

export default BattleScene
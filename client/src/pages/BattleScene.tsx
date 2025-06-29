import type { Enemies } from '../types/enemies'
import EnemyBattleCard from '../components/battle/EnemyBattleCard'
import PlayerBattleCard from '../components/battle/PlayerBattleCard'
import { useUser } from '../context/UserContext'
import { useEffect, useState } from 'react'
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
  const [isAnimating, setIsAnimating] = useState(false);
  // console.log(user[0])
  // console.log(playerCopy, 'player copy')
  // console.log(playerCopy.hp, 'player hp')
  // console.log(enemy.hp, 'enemy hp')
  // console.log(whoAttacks, 'who attacks')
  useEffect(() => {
    if (round === 0) return;
    if (playerCopy.hp <= 0 || enemy.hp <= 0 || isAnimating) return;
    
    setIsAnimating(true);

    if (whoAttacks) {
      // Enemy attacks
      console.log('Enemy attacks');
      performAttackEnemy(user, enemy, playerCopy, setAttackAnimation, (damage) => {
        setPlayerCopy((prev: Character) => ({
          ...prev,
          hp: Math.max(0, prev.hp - damage)
        }));
        setRound(prev => prev + 1);
        setWhoAttacks(false);
        setIsAnimating(false)
      
      }, setIsAnimating);
    } else {
      console.log('Player attacks');
      // Player attacks
      performAttackPlayer(user, playerCopy, enemy, setAttackAnimation, (damage) => {
        setEnemy((prev: Enemies) => ({
          ...prev,
          hp: Math.max(0, prev.hp - damage)
        }));
        setRound(prev => prev + 1);
        setWhoAttacks(true);
        setIsAnimating(false)
        
      }, setIsAnimating)
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
        
      <AnimatePresence>
        {attackAnimation && whoAttacks && (
          <motion.div
            key={Math.random()}
            initial={{
            x: attackAnimation.from === user[0].name ? -150 : 350,
            y: -100,
            opacity: 1
            }}
            animate={{
            x: attackAnimation.from === user[0].name ? 350 : -150,
            y: [ -100, -110, -120, -130, -120, -110 -100 ], // up, then down to baseline
            opacity: 1
            }}
            exit={{ opacity: 0 }}
            transition={{
            duration: 1,
            y: { times: [0.1, 0.2, 0.3, 0.4, 0.5 ,0.6, 0.7] } // control timing of y keyframes
            }}
            className="absolute top-1/2 left-1/2 text-5xl text-red-600 z-50"
            >
            {attackAnimation.type === 'slash' ? '🗡️' : '🔥'}
        </motion.div>
        )}

        {attackAnimation && !whoAttacks &&  (
          <motion.div
            key={Math.random()}
            initial={{
            x: attackAnimation.from === user[0].name ? -150 : 350,
            y: -100,
            opacity: 1
            }}
            animate={{
            x: attackAnimation.from === user[0].name ? 350 : -150,
            y: [ -100, -110, -120, -130, -120, -110 -100 ], // up, then down to baseline
            opacity: 1
            }}
            exit={{ opacity: 0 }}
            transition={{
            duration: 1,
            y: { times: [0.1, 0.2, 0.3, 0.4, 0.5 ,0.6, 0.7] } // control timing of y keyframes
            }}
            className="absolute top-1/2 left-1/2 text-5xl text-red-600 z-50"
            >
            {attackAnimation.type === 'slash' ? '🗡️' : '🔥'}
        </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default BattleScene
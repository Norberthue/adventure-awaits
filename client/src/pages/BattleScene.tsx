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
  const [round, setRound] = useState(0);
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

  if (whoAttacks) {
    // Enemy attacks
    performAttackEnemy(user, enemy, playerCopy, setAttackAnimation, (damage) => {
      setPlayerCopy((prev: Character) => ({
        ...prev,
        hp: Math.max(0, prev.hp - damage)
      }));
      setWhoAttacks(false);
      setRound(prev => prev + 1);

     
    }, setIsAnimating);
  } else {
    // Player attacks
    performAttackPlayer(user, playerCopy, enemy, setAttackAnimation, (damage) => {
      setEnemy((prev: Enemies) => ({
        ...prev,
        hp: Math.max(0, prev.hp - damage)
      }));
      setWhoAttacks(true);
      setRound(prev => prev + 1);
      
      
    }, setIsAnimating)
  }

}, [round]);


  useEffect(() => {
    setTimeout(() => setRound(1), 1000);
  }, []);
  
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
  {attackAnimation && (
    <motion.div
      key={Math.random()}
      initial={{ x: attackAnimation.from === user[0].name ? -150 : 350, y: 0, opacity: 1 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
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
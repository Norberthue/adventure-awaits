import type { Enemies } from '../types/enemies'
import EnemyBattleCard from '../components/EnemyBattleCard'
import PlayerBattleCard from '../components/PlayerBattleCard'

interface BattleSceneProps {
    enemy: Enemies
    }

const BattleScene = ({enemy}: BattleSceneProps) => {
  return (
    <div className='flex  items-center justify-center h-screen bg-[#181820]'>
        <PlayerBattleCard/>
        <EnemyBattleCard enemy={enemy} />
    </div>
  )
}

export default BattleScene
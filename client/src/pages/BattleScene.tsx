import type { Enemies } from '../types/enemies'
import EnemyBattleCard from '../components/EnemyBattleCard'
import PlayerBattleCard from '../components/PlayerBattleCard'

interface BattleSceneProps {
    enemy: Enemies
    }

const BattleScene = ({enemy}: BattleSceneProps) => {
  return (
    <div className='flex justify-between gap-10'>
        <PlayerBattleCard/>
        <EnemyBattleCard enemy={enemy} />
    </div>
  )
}

export default BattleScene
import type { Enemies } from '../types/enemies'
import EnemyBattleCard from '../components/battle/EnemyBattleCard'
import PlayerBattleCard from '../components/battle/PlayerBattleCard'

interface BattleSceneProps {
    enemy: Enemies
    }

const BattleScene = ({enemy}: BattleSceneProps) => {
  return (
    <div className='flex justify-between  gap-10'>
        <PlayerBattleCard/>
        <div className='flex items-end gap-5 '>
            <div className='bg-border-dark w-[60px] h-[60px] relative cursor-pointer duration-200 rounded-xl border-2 border-border-gray  hover:scale-110'>
              <img className='absolute top-1/2 left-[20px] -translate-y-1/2 ' src='./assets/images/Polygon.png'/>
            </div>
            <button className='bg-border-dark hover:scale-110 font-semibold cursor-pointer duration-200 rounded-xl border-2 border-border-gray w-[220px] h-[60px] pt-3 pb-3 pl-5 pr-5 text-text-y text-2xl'>Skip</button>
        </div>
        <EnemyBattleCard enemy={enemy}/>
    </div>
  )
}

export default BattleScene

import type { Character } from '../../types/characters'
import { getHp } from '../../utils/characterStatsByClass'
import BattleImage from './BattleImage'
import BattleStats from './BattleStats'
import { useUser } from '../../context/UserContext'
interface PlayerBattleCardProps {
  player: Character
}

const PlayerBattleCard = ({ player }:PlayerBattleCardProps) => {
  const { user } = useUser()
  return (
    <div className="flex flex-col items-center w-[300px] gap-5" key={player.level}>
        <BattleImage image={player.image} name={player.name} level={player.level} classType={player.class}/>

        <div className='relative w-full border-2 text-2xl text-white border-border-gray'>
            <div className='bg-[#4D8219] w-full h-10' style={{ width: `${player.hp > 0 ? Math.min(100, (player.hp / getHp(player.class, user)) * 100 ) : 0}%`}}></div>
            <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' >{player.hp} / {getHp(player.class, user)} </p>
        </div>
       
        <div className="flex text-white w-full flex-col gap-2 bg-border-dark rounded-b-xl p-2 border-4 border-border-gray">
            <BattleStats title={'Strength'} data={player.strength}/>
            <BattleStats title={'Dexterity'} data={player.dexterity}/>
            <BattleStats title={'Intelligence'} data={player.intelligence}/>
            <BattleStats title={'Vitality'} data={player.vitality}/>
            <BattleStats title={'Luck'} data={player.luck}/>
        </div>
     
    </div>
  )
}

export default PlayerBattleCard
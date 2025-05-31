
import { useUser } from '../../context/UserContext'
import { getHp } from '../../utils/characterStatsByClass'
import BattleImage from './BattleImage'
import BattleStats from './BattleStats'

const PlayerBattleCard = () => {
  const { user } = useUser()
    return (
    <div className="flex flex-col items-center w-[300px] gap-5" key={user[0].level}>
        <BattleImage image={user[0].image} name={user[0].name} level={user[0].level}/>

        <div className='relative w-full border-2 text-2xl text-white border-border-gray'>
            <div className='bg-[#4D8219] w-full h-10'></div>
            <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{getHp(user[0].class)} / {getHp(user[0].class)} </p>
        </div>
       
        <div className="flex text-white w-full flex-col gap-2 bg-border-dark rounded-b-xl p-2 border-4 border-border-gray">
            <BattleStats title={'Strength'} data={user[0].strength}/>
            <BattleStats title={'Dexterity'} data={user[0].dexterity}/>
            <BattleStats title={'Intelligence'} data={user[0].intelligence}/>
            <BattleStats title={'Vitality'} data={user[0].vitality}/>
            <BattleStats title={'Luck'} data={user[0].luck}/>
        </div>
     
    </div>
  )
}

export default PlayerBattleCard
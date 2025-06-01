import type { Enemies } from '../../types/enemies'
import BattleImage from './BattleImage'
import BattleStats from './BattleStats'

interface EnemyBattleCardProps {
    enemy: Enemies
}

const EnemyBattleCard = ({enemy}: EnemyBattleCardProps) => {
  return (
    <div className="flex flex-col items-center w-[300px] gap-5" key={enemy.level}>
       
        <BattleImage image={enemy.image} name={enemy.name} level={enemy.level} classType={enemy.classType}/>
        
        <div className='relative w-full border-2 text-2xl text-white border-border-gray'>
            <div className='bg-[#4D8219] w-full h-10' style={{ width: `${Math.min(100, (enemy.hp / enemy.maxHp) * 100 )}%`}}></div>
            <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{enemy.hp} / {enemy.hp} </p>
        </div>

        <div className="flex text-white w-full flex-col gap-2 bg-border-dark rounded-b-xl p-2 border-4 border-border-gray">
            <BattleStats title={'Strength'} data={enemy.strength}/>
            <BattleStats title={'Dexterity'} data={enemy.dexterity}/>
            <BattleStats title={'Intelligence'} data={enemy.intelligence}/>
            <BattleStats title={'Vitality'} data={enemy.vitality}/>
            <BattleStats title={'Luck'} data={enemy.luck}/>
        </div>
      
      
    </div>
  )
}

export default EnemyBattleCard
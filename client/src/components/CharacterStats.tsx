import { useUser } from '../context/UserContext';
import { addVit, addStr, addDex, addInt, addLck } from '../utils/addingStats';
import { getMaxEpxForLevel} from '../utils/ExpCalculation';
import Equipment from './Equipment';
import Augments from './Augments';
import Inventory from './Inventory';
import CharacterImage from './CharacterImage';
import StatCard from './StatCard';
import { getDmg, getHp, getCrit, getDefense, getDmgRed, getEvasion, getResistence } from '../utils/characterStatsByClass';
const CharacterStats = () => {
    const { user } = useUser()
    
    return (
    <div className='col-span-10 pt-4 pb-4 pr-10 pl-10  h-[800px] rounded-2xl bg-components justify-center border-4 border-border-yellow'>
        {user.map((player) => {
            return (
                <div className='grid grid-cols-12 gap-10' key={player.userId}>
                    <div className='col-span-3 flex flex-col '>
                        
                        <CharacterImage player={player} getMaxEpxForLevel={getMaxEpxForLevel}/>
                      
                        <div className='border-4 border-border-gray bg-border-dark rounded-b-2xl'>
                            <div className='flex p-3 flex-col gap-2'>
                                <StatCard title={'Strength'} title2={player.class === "Warrior" ? "Damage" : "Defense"}
                                data={player.strength} func={addStr} func2={player.class === 'Warrior' ? getDmg : getDefense}/>

                                <StatCard title={'Dexterity'} title2={player.class === "Hunter" ? "Damage" : "Evasion"} 
                                data={player.dexterity} func={addDex} func2={player.class === 'Hunter'? getDmg : getEvasion}/>

                                <StatCard title={'Intelligence'} title2={player.class === "Mage" ? "Damage" : "Resistance"} 
                                data={player.intelligence} func={addInt} func2={player.class === 'Mage' ? getDmg : getResistence}/>
                                
                                <StatCard title={'Vitality'} title2={'Hit Points'} data={player.vitality} func={addVit} func2={getHp}/>
                                <StatCard title={'Luck'} title2={"Crit Hit"} data={player.luck} func={addLck} func2={getCrit}/>
                                <StatCard title={'Armor'} title2={"Damage Red"} data={player.armor} func2={getDmgRed}/>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-9 grid grid-cols-12  gap-10'>
                            <Equipment/>
                            <Augments/>                
                            <Inventory/>           
                    </div>                            

                </div>    
            )
        })}
        
    </div>
  )
}

export default CharacterStats
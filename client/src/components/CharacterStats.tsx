
import { useUser } from '../context/UserContext';
import { addVit, addStr, addDex, addInt, addLck } from '../utils/addingStats';
import { getMaxEpxForLevel} from '../utils/ExpCalculation';
import Equipment from './Equipment';
import Augments from './Augments';
import Inventory from './Inventory';
import Stats from './Stats';
import CharacterImage from './CharacterImage';

const CharacterStats = () => {
    const { user } = useUser()
    
    return (
    <div className='col-span-10 pt-4 pb-4 pr-10 pl-10  h-[800px] rounded-2xl bg-components justify-center border-4 border-border-yellow'>
        {user.map((player) => {
            return (
                <div className='grid grid-cols-12 gap-5' key={player.userId}>
                    <div className='col-span-3 flex flex-col '>
                        
                        <CharacterImage player={player} getMaxEpxForLevel={getMaxEpxForLevel}/>
                      
                        <div className='border-4 border-border-gray bg-border-dark rounded-b-lg'>
                            <div className='flex p-3 flex-col gap-2'>
                                <Stats title={'Strength'} data={player.strength} func={addStr}/>
                                <Stats title={'Dexterity'} data={player.dexterity} func={addDex}/>
                                <Stats title={'Intelligence'} data={player.intelligence} func={addInt}/>
                                <Stats title={'Vitality'} data={player.vitality} func={addVit}/>
                                <Stats title={'Luck'} data={player.luck} func={addLck}/>
                                <Stats title={'Armor'} data={player.armor}/>
                                
                            </div>
                        </div>
                    </div>
                    <div className='col-span-9 grid grid-cols-12  gap-5'>
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
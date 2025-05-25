import { getDmg, getHp } from '../utils/characterStatsByClass';
import { useUser } from '../context/UserContext';
import { addVit, addStr, addDex, addInt, addLck } from '../utils/addingStats';
import { getMaxEpxForLevel} from '../utils/ExpCalculation';
import Equipment from './Equipment';
import Augments from './Augments';
import Inventory from './Inventory';
import Stats from './Stats';

const CharacterStats = () => {
    const { user, setUser } = useUser()
    
    return (
    <div className='col-span-10 pt-4 pb-4 pr-10 pl-10  rounded-2xl bg-components justify-center border-4 border-border-yellow'>
        {user.map((player) => {
            return (
                <div className='grid grid-cols-12 gap-5' key={player.userId}>
                    <div className='col-span-3 gap-3'>
                        <div className='border-4 border-t-border-gray rounded-t-2xl border-l-border-gray border-r-border-gray bg-border-dark '>
                            <img src={user[0].image} alt="Character" className='w-fit object-contain rounded-t-2xl h-40 border-[#292827]' />
                        </div>
                        <div className='flex items-center h-5 font-semibold text-xl  justify-between border-2 border-border-gray '>
                            <div className="flex flex-col min-w-[200px]">
                            
                                <div className="w-full relative bg-slot h-5">
                                    <div
                                        className="bg-[#f6c945] h-4 rounded-full transition-all duration-300"
                                        style={{
                                            width: `${Math.min(100, (player.experience / getMaxEpxForLevel(player.level)) * 100)}%`
                                        }}
                                    >
                                    <div className="flex gap-1 text-white text-sm absolute top-0 left-1/2  -translate-x-1/2">
                                        <span>Level</span>
                                        <span>{player.level}</span>
                                    </div>
                                    </div>
                                </div>
                            </div>   
                        </div>
                    
                        <div className='border-4 border-b-border-gray border-l-border-gray border-r-border-gray bg-border-dark rounded-lg'>
                            <div className='flex flex-col gap-4'>
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
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
    <div className='col-span-10 pt-4 pb-4 pr-10 pl-10  h-[800px] rounded-2xl bg-components justify-center border-4 border-border-yellow'>
        {user.map((player) => {
            return (
                <div className='grid grid-cols-12 gap-5' key={player.userId}>
                    <div className='col-span-3 flex flex-col '>
                        <div className='relative'>
                            <img src={user[0].image} alt="Character" className='object-cover w-full h-full border-4 border-border-gray rounded-t-2xl bg-border-dark' />
                            <div className='absolute bottom-[5%] w-30 left-1/2 flex items-center justify-center   -translate-x-1/2 pt-1 pb-1 pl-3 pr-3 bg-slot rounded-xl border-2 border-border-gray '>
                                <span className=' text-text-y text-xl '>{player.name}</span>
                            </div>
                        </div>
                       
                        <div className="w-full relative bg-slot  border-l-4 z-50 border-r-4 border-border-gray h-7 ">
                            <div
                                className="bg-[#f6c945] transition-all duration-300"
                                style={{
                                    width: `${Math.min(100, (player.experience / getMaxEpxForLevel(player.level)) * 100)}%`
                                }}
                            >
                                <div className=" text-white text-sm absolute top-1/2 left-1/2 -translate-y-1/2    -translate-x-1/2">
                                    <div className='group flex gap-1 text-xl relative'>
                                        <span className=''>Level</span>
                                        <span>{player.level}</span>
                                        <div className='opacity-0 group-hover:opacity-100  rounded-2xl border-4 border-border-gray  p-4 bg-slot-transparent -top-4  flex   justify-center  absolute   left-5/2 -translate-x-1/2 transition-all duration-300'>
                                            <div className='text-lg text-text-y '>Exp: {player.experience}</div>
                                            <span className=''> /</span>
                                            <div className='text-lg text-text-y '>1000</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                    
                        <div className='border-4 border-border-gray bg-border-dark rounded-b-lg'>
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
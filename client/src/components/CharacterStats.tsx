import { getDmg, getHp } from '../utils/characterStatsByClass';
import { useUser } from '../context/UserContext';
import { addVit, addStr, addDex, addInt, addLck } from '../utils/addingStats';
import { getMaxEpxForLevel} from '../utils/ExpCalculation';
import Equipment from './Equipment';
import Augments from './Augments';
import Inventory from './Inventory';

const CharacterStats = () => {
    const { user, setUser } = useUser()
    
    return (
    <div className='flex w-full h-full flex-col items-center pt-4 pb-4 pr-10 pl-10  rounded-2xl bg-components justify-center border-4 border-border-yellow'>
        {user.map((player) => {
            return (
                <div className='flex gap-5 w-full h-full ' key={player.userId}>
                    <div className='flex flex-col border-4 border-border-gray bg-border-dark rounded-lg '>
                        
                        <div>
                            <img src={user[0].image} alt="Character" className='w-50 h-50 border-[#292827]' />
                        </div>
                    
                        <div>
                            <div className='flex flex-col gap-4 p-4'>
                                <div className='flex items-center font-semibold text-xl pl-2 pr-2 pt-1 pb-1 justify-between border-2 border-[#2e2d2b] bg-[#141414] rounded-lg'>
                                    <p className='text-[#b49c76]'>Vitality</p>
                                    <p className='text-[#dfdcd0]'>{player.vitality}</p>
                                    <button className='border-2 border-[#2e2d2b] pl-2 pr-2   bg-[#141313] rounded-lg' onClick={() => addVit(user, setUser)}>+</button>
                                </div>
                                <div className='flex items-center font-semibold text-xl pl-2 pr-2 pt-1 pb-1 justify-between border-2 border-[#2e2d2b] bg-[#141414] rounded-lg'>
                                    <p className='text-[#b49c76]'>Strength</p>
                                    <p className='text-[#dfdcd0]'>{player.strength}</p>
                                    <button className='border-2 border-[#2e2d2b] pl-2 pr-2   bg-[#141313] rounded-lg' onClick={() => addStr(user, setUser)}>+</button>
                                </div>
                                <div className='flex items-center font-semibold text-xl pl-2 pr-2 pt-1 pb-1 justify-between border-2 border-[#2e2d2b] bg-[#141414] rounded-lg'>
                                    <p className='text-[#b49c76]'>Dexterity</p>
                                    <p className='text-[#dfdcd0]'>{player.dexterity}</p>
                                    <button className='border-2 border-[#2e2d2b] pl-2 pr-2   bg-[#141313] rounded-lg' onClick={() => addDex(user, setUser)}>+</button>
                                </div>
                                <div className='flex items-center font-semibold text-xl pl-2 pr-2 pt-1 pb-1 justify-between border-2 border-[#2e2d2b] bg-[#141414] rounded-lg'>
                                    <p className='text-[#b49c76]'>Intelligence</p>
                                    <p className='text-[#dfdcd0]'>{player.intelligence}</p>
                                    <button className='border-2 border-[#2e2d2b] pl-2 pr-2   bg-[#141313] rounded-lg' onClick={() => addInt(user, setUser)}>+</button>
                                </div>
                                <div className='flex items-center font-semibold text-xl pl-2 pr-2 pt-1 pb-1 justify-between border-2 border-[#2e2d2b] bg-[#141414] rounded-lg'>
                                    <p className='text-[#b49c76]'>Luck</p>
                                    <p className='text-[#dfdcd0]'>{player.luck}</p>
                                    <button className='border-2 border-[#2e2d2b] pl-2 pr-2   bg-[#141313] rounded-lg' onClick={() => addLck(user, setUser)}>+</button>
                                </div>
                                <div className='flex items-center font-semibold text-xl pl-2 pr-2 pt-1 pb-1 justify-between border-2 border-[#2e2d2b] bg-[#141414] rounded-lg'>
                                    <p className='text-[#b49c76]'>Gold</p>
                                    <p className='text-[#dfdcd0]'>{player.gold}</p>
                                </div>
                                <div className='flex items-center font-semibold text-xl pl-2 pr-2 pt-1 pb-1 justify-between border-2 border-[#2e2d2b] bg-[#141414] rounded-lg'>
                                    <div className="flex flex-col w-full">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-[#b49c76]">EXP</span>
                                            <span className="text-[#dfdcd0] text-sm">{player.experience} / {getMaxEpxForLevel(player.level)}</span>
                                        </div>
                                        <div className="w-full bg-[#292827] rounded-full h-4">
                                            <div
                                                className="bg-[#f6c945] h-4 rounded-full transition-all duration-300"
                                                style={{
                                                    width: `${Math.min(100, (player.experience / getMaxEpxForLevel(player.level)) * 100)}%`
                                                }}
                                            ></div>
                                        </div>
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-5  p-4 ml-4'>
                            <Equipment/>
                            <Augments/>                
                        </div>  
                        <div>
                            <Inventory/>
                        </div>                
                    </div>                            

                </div>    
            )
        })}
        
    </div>
  )
}

export default CharacterStats
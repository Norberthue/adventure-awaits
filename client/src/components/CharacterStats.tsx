import { getDmg, getHp } from '../utils/characterStatsByClass';
import { useUser } from '../context/UserContext';
import { addVit, addStr, addDex, addInt, addLck } from '../utils/addingStats';
import { getMaxEpxForLevel, calculateExpGain } from '../utils/ExpCalculation';

const CharacterStats = () => {
    const { user, setUser } = useUser()
    
    if (user) return (
    <div className='flex flex-col items-center justify-center mt-10'>
        {user.map((player) => {
            return (
                <div key={player.userId} className='flex flex-col  border-4 border-[#2e2d2b] rounded-lg mb-4 max-w-[500px] w-full'>
                    <div className='flex items-center justify-between pl-6 pr-6 pt-3 pb-3  border-b-4 border-[#292827]'>
                        <h1 className='text-4xl font-semibold text-[#daba80] '>{player.name}</h1>
                        <p className='bg-[#211f25] text-[#dfdcd0] font-bold p-2 rounded-2xl text-xl'>Level {player.level}</p>
                    </div>
                    <div className='flex gap-5  p-4'>
                        <div>
                            <img src={user[0].image} alt="Character" className='w-40 h-40  border-4 rounded-2xl border-[#292827]' />
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <div className='text-2xl text-[#daba80] font-semibold'><p>{player.class}</p></div>
                            <div className='w-full min-w-[250px] gap-2 flex flex-col'>
                                <div className='flex  items-center font-semibold justify-between text-xl text-[#7eb671] gap-2'>
                                    <p className=''>HP</p>
                                    <p>{getHp(player.class)}</p>
                                </div>
                                <div className='flex items-center font-semibold text-xl justify-between text-[#b03d2b] gap-2'>
                                    <p className=''>Attack</p>
                                    <p>{getDmg(player.class)}</p>
                                </div>
                                <div className='flex items-center font-semibold text-xl justify-between text-[#94897b] gap-2'>
                                    <p className=''>Armor</p>
                                    <p>{player.armor}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='grid grid-cols-2 gap-4 p-4'>
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
                                <p className='text-[#b49c76]'>Experience</p>
                                <p className='text-[#dfdcd0]'>{player.experience}/{getMaxEpxForLevel(player.level)}</p>
                                <p>{calculateExpGain(player.level)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
        
    </div>
  )
}

export default CharacterStats
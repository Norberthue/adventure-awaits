import { getDmg, getHp } from '../functions/characterStatsByClass';
import { useUser } from '../context/UserContext';
import { addVit, addStr, addDex, addInt, addLck } from '../functions/addingStats';

const CharacterStats = () => {
    const { user, setUser } = useUser()
    
    if (user) return (
    <div className='flex flex-col items-center justify-center mt-10'>
        <img src={user[0].image} alt="Character" className='w-32 h-32 rounded-full' />
        <h2 className='text-xl font-semibold mt-4'>{user[0].name}</h2>
        <p className='text-gray-400'>{user[0].class}</p>
        <p className='text-gray-400'>Level: {user[0].level}</p>
        <p className='text-gray-400'>Health: {getHp(user[0].class)} </p>
        <div className='flex items-center justify-center gap-10'>
            <p className='text-gray-400'>Vitality: {user[0].vitality}</p>
            <button onClick={() => {addVit(user , setUser)}}>add</button>
        </div>
        <div className='flex items-center justify-center gap-10'>
            <p className='text-gray-400'>Strength: {user[0].strength}</p>
            <button onClick={() => addStr(user, setUser)}>add</button>
        </div>
        <div className='flex items-center justify-center gap-10'>
            <p className='text-gray-400'>Dexterity: {user[0].dexterity}</p>
            <button onClick={() => addDex(user , setUser)}>add</button>
        </div>
        <div className='flex items-center justify-center gap-10'>
            <p className='text-gray-400'>Intelligence: {user[0].intelligence}</p>
            <button onClick={() => addInt(user , setUser)}>add</button>
        </div>
        <div className='flex items-center justify-center gap-10'>
            <p className='text-gray-400'>Luck: {user[0].luck}</p>
            <button onClick={() => addLck(user , setUser)}>add</button>
        </div>
        <div className='flex items-center justify-center gap-10'>
            <p className='text-gray-400'>Armor: {user[0].armor}</p>
        </div>
        <div className='flex items-start justify-start gap-10'>
            <p className='text-gray-400'>Damage: {getDmg(user[0].class)}</p>
        </div>
        <p className='text-gray-400'>Gold: {user[0].gold}</p>
            
    </div>
  )
}

export default CharacterStats
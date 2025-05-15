
import { useNavigate } from 'react-router-dom';
import { useUser} from '../context/UserContext';
const CharacterOverview = () => {
    const { user, logout, getHp, setUser, loading, getDamage } = useUser();
    const navigate = useNavigate()
    
    const handleLogout = () => {
        logout()
        navigate('/')
    }

    const addhp = () => {
        if (!user) return;
        const updatedUser = user.map((data) => (data.vitality ? { ...data, vitality: data.vitality + 1 } : data));
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
    }
    
    // console.log(user[0].vitality)  
    if (loading) return <div className='text-white w-full h-full text-8xl flex items-center justify-center'>Loading...</div>
    if (user) return (
    <div className='text-white'>
        <div className='flex items-center justify-center gap-10 mt-2'>
            <h1 className='text-3xl font-bold text-center'>Character Overview</h1>
            <button className='cursor-pointer bg-red-400 hover:bg-red-600 duration-200 rounded-2xl p-2' onClick={handleLogout}>Logout</button>
        </div>
        <div className='flex flex-col items-center justify-center mt-10'>
            <img src={user[0].image} alt="Character" className='w-32 h-32 rounded-full' />
            <h2 className='text-xl font-semibold mt-4'>{user[0].name}</h2>
            <p className='text-gray-400'>{user[0].class}</p>
            <p className='text-gray-400'>Level: {user[0].level}</p>
            <div className='flex items-center justify-center gap-10'>
                <p className='text-gray-400'>Vitality: {user[0].vitality}</p>
                <p className='text-gray-400'>Health: {getHp(user[0].vitality ?? 0)}</p>
                <button onClick={addhp}>add</button>
            </div>
            
            <p className='text-gray-400'>Strength: {user[0].strength}</p>
            <p className='text-gray-400'>Gold: {user[0].gold}</p>
            
        </div>
    </div>
  )
}

export default CharacterOverview
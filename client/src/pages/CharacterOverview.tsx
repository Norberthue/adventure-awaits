
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
const CharacterOverview = () => {
    const { user, logout } = useUser();
    const navigate = useNavigate()
    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return (
    <div className='text-white'>
        <div className='flex items-center justify-center gap-10 mt-2'>
            <h1 className='text-3xl font-bold text-center'>Character Overview</h1>
            <button className='cursor-pointer bg-red-400 hover:bg-red-600 duration-200 rounded-2xl p-2' onClick={handleLogout}>Logout</button>
        </div>
        <div className='flex flex-col items-center justify-center mt-10'>
            <img src={user?.image} alt="Character" className='w-32 h-32 rounded-full' />
            <h2 className='text-xl font-semibold mt-4'>{user?.name}</h2>
            <p className='text-gray-400'>{user?.class}</p>
            <p className='text-gray-400'>Level: {user?.level}</p>
            <p className='text-gray-400'>Health: {user?.hp}</p>
            <p className='text-gray-400'>Gold: {user?.gold}</p>
            
        </div>
    </div>
  )
}

export default CharacterOverview
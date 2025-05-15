
import { useNavigate } from 'react-router-dom';
import { useUser} from '../context/UserContext';
import CharacterStats from '../components/CharacterStats';
const CharacterOverview = () => {
    const { user, logout,  setUser, loading, } = useUser();
    const navigate = useNavigate()
    
    const handleLogout = () => {
        logout()
        navigate('/')
    }

   
    
    // console.log(user[0].vitality)  
    if (loading) return <div className='text-white w-full h-full text-8xl flex items-center justify-center'>Loading...</div>
    return (
    <div className='text-white'>
        <div className='flex items-center justify-center gap-10 mt-2'>
            <h1 className='text-3xl font-bold text-center'>Character Overview</h1>
            <button className='cursor-pointer bg-red-400 hover:bg-red-600 duration-200 rounded-2xl p-2' onClick={handleLogout}>Logout</button>
        </div>
        <CharacterStats />
    </div>
  )
}

export default CharacterOverview
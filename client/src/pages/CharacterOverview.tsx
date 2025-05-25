
import { useUser} from '../context/UserContext';
import CharacterStats from '../components/CharacterStats';
import Sidebar from '../components/Sidebar';
const CharacterOverview = () => {
    const { loading, user  } = useUser();
    
    if (loading) return <div className='text-white w-full h-full text-8xl flex items-center justify-center'>Loading...</div>
    if (!user) return <div className='text-white w-full h-full text-8xl flex items-center justify-center'>Please log in or register</div>;
    return (
    <div className='grid grid-cols-12 gap-5 mt-5'>
      <Sidebar/>
      <CharacterStats />
    </div>
  )
}

export default CharacterOverview
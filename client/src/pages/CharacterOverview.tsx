
import { useUser} from '../context/UserContext';
import CharacterStats from '../components/CharacterStats';
const CharacterOverview = () => {
    const { loading, } = useUser();
    
    if (loading) return <div className='text-white w-full h-full text-8xl flex items-center justify-center'>Loading...</div>
    return (
    <div className='text-white'>
        <CharacterStats />
    </div>
  )
}

export default CharacterOverview
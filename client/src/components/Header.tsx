
import { useUser} from '../context/UserContext';
const Header = () => {
    const { logout, user } = useUser(); 
  return (
    <div className="flex items-center h-20 justify-center border-b-4 border-[#2e2d2b] p-4 bg-[#1a1a1a] text-white">
        {user && <div className='flex flex-1 items-center justify-center w-full'></div>}
        <div className="flex flex-1 items-center justify-center w-full">
            <h1 className="text-3xl font-bold text-[#daba80]">Adventure awaits</h1>
        </div>
        {user &&<div className="flex flex-1 items-center justify-end w-full">
            <button
                className="cursor-pointer bg-red-400 hover:bg-red-600 duration-200 rounded-2xl p-2"
                onClick={logout}
            >
                Logout
            </button>
        </div>}
    </div>
  )
}

export default Header


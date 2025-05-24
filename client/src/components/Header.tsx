
import { useUser} from '../context/UserContext';
const Header = () => {
    const { logout, user } = useUser(); 
    console.log(user)
  return (
    <>
        <div className="flex items-center  justify-between h-[155px] border-4 rounded-2xl pr-10 pl-10 border-border-yellow  bg-components text-white">
        {user.length > 0 ? (
            <div className='flex items-center justify-center gap-2'>
                <div className=''>
                    <img className='rounded-full border-4 border-border-gray w-[100px] h-[90]' src={user[0].image}></img>
                </div>
                <div className='text-xl font-semibold '>
                    <p>Lvl.<span>{user[0].level}</span></p>
                    <p className='flex gap-1 items-center'>{user[0].gold}<img className='object-fit w-5' src='../assets/images/coin.png'/></p>
                </div>
            </div>
            ) : ( 
                <div className='text-xl font-semibold w-10'></div>
            )}
        <div className="flex items-center justify-center  ">
            <img className='object-fill' src='../assets/images/logo1.png'></img>
        </div>
        {user.length > 0 ? (
            <div className="flex items-center ">
                <button
                    className="cursor-pointer text-text-y text-2xl font-semibold hover:text-text-y/90 duration-200 "
                    onClick={logout}
                >
                    Logout
                </button>
            </div>
        ) : (
            <div className='text-xl font-semibold w-10'></div>
        )}
    </div>
    
    </>
    
  )
}

export default Header


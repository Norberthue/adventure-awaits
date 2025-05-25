
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    
    <div className='flex col-span-2 font-semibold flex-col items-center justify-center rounded-2xl text-xl gap-2 p-4 border-4  border-border-yellow bg-components h-[500px]'>
        <Link to={'/characterOverview'} className='flex flex-col hover:bg-border-dark duration-200 rounded-xl bg-dark-light w-full items-center justify-center pt-2 pb-2 pl-5 pr-5 border-4 mt-5 border-border-dark'>
            <h1 className=' font-semibold text-text-y'>Character</h1>
        </Link>
        <Link to={'/pickEnemy'} className='flex flex-col rounded-xl w-full hover:bg-border-dark duration-200  bg-dark-light items-center justify-center pt-2 pb-2 pl-5 pr-5 border-4 mt-5 border-border-dark'>
            <h1 className=' font-semibold text-text-y'>Battle</h1>
        </Link>
        <Link to={'/shop'} className='flex flex-col rounded-xl w-full hover:bg-border-dark duration-200  bg-dark-light items-center justify-center pt-2 pb-2 pl-5 pr-5 border-4 mt-5 border-border-dark'>
            <h1 className=' font-semibold text-text-y'>Shop</h1>
        </Link>
        <Link to={'/shop'} className='flex flex-col rounded-xl w-full hover:bg-border-dark duration-200  bg-dark-light items-center justify-center pt-2 pb-2 pl-5 pr-5 border-4 mt-5 border-border-dark'>
            <h1 className=' font-semibold text-text-y'>Arena</h1>
        </Link>
        <Link to={'/shop'} className='flex flex-col rounded-xl w-full hover:bg-border-dark duration-200  bg-dark-light items-center justify-center pt-2 pb-2 pl-5 pr-5 border-4 mt-5 border-border-dark'>
            <h1 className=' font-semibold text-text-y'>Leaderboards</h1>
        </Link>
    </div>
    
  )
}

export default Sidebar
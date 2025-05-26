
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    
    <div className='h-[800px] flex col-span-2 font-semibold flex-col items-start justify-start rounded-2xl text-3xl gap-4 pl-4 pr-4 border-4 border-border-yellow bg-components '>
        <Link to={'/characterOverview'} className='flex flex-col  rounded-xl bg-dark-light hover:text-dark-light hover:bg-text-y text-text-y duration-500  w-full items-center justify-center pt-2 pb-2 pl-5 pr-5 border-4 mt-5 border-border-dark'>
            <h1 className=' font-semibold  '>Character</h1>
        </Link>
        <Link to={'/pickEnemy'} className='flex flex-col rounded-xl w-full bg-dark-light hover:text-dark-light hover:bg-text-y text-text-y duration-500     items-center justify-center pt-2 pb-2 pl-5 pr-5 border-4 mt-5 border-border-dark'>
            <h1 className=' font-semibold '>Battle</h1>
        </Link>
        <Link to={'/shop'} className='flex flex-col rounded-xl w-full bg-dark-light hover:text-dark-light hover:bg-text-y text-text-y duration-500     items-center justify-center pt-2 pb-2 pl-5 pr-5 border-4 mt-5 border-border-dark'>
            <h1 className=' font-semibold '>Shop</h1>
        </Link>
        <Link to={'/shop'} className='flex flex-col rounded-xl w-full bg-dark-light hover:text-dark-light hover:bg-text-y text-text-y duration-500     items-center justify-center pt-2 pb-2 pl-5 pr-5 border-4 mt-5 border-border-dark'>
            <h1 className=' font-semibold '>Arena</h1>
        </Link>
        <Link to={'/shop'} className='flex flex-col  rounded-xl w-full bg-dark-light hover:text-dark-light hover:bg-text-y text-text-y duration-500    items-center justify-center pt-2 pb-2 pl-5 pr-5 border-4 mt-5 border-border-dark'>
            <h1 className=' font-semibold '>Guild</h1>
        </Link>
        <Link to={'/shop'} className='flex flex-col  rounded-xl w-full  bg-dark-light hover:text-dark-light hover:bg-text-y text-text-y duration-500   items-center justify-center pt-2 pb-2 pl-5 pr-5 border-4 mt-5 border-border-dark'>
            <h1 className=' font-semibold '>Dungeons</h1>
        </Link>
        <Link to={'/shop'} className='flex flex-col text-2xl rounded-xl w-full  bg-dark-light hover:text-dark-light hover:bg-text-y text-text-y duration-500   items-center justify-center pt-2 pb-2 pl-5 pr-5 border-4 mt-5 border-border-dark'>
            <h1 className=' font-semibold '>Leaderboards</h1>
        </Link>
    </div>
    
  )
}

export default Sidebar

import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center gap-5 mt-5  absolute  p-4 border-r-4 border-b-4 border-t-4 border-[#2e2d2b]  top-20 left-0 bg-[#1a1a1a]'>
            <Link to={'/characterOverview'} className='flex flex-col items-center justify-center w-full h-full p-4 border-4 mt-5 border-[#2e2d2b]'>
                <h1 className='text-3xl font-bold text-[#daba80]'>Character</h1>
            </Link>
            <Link to={'/pickEnemy'} className='flex flex-col items-center justify-center p-4 border-4 border-[#2e2d2b] w-full h-full'>
                <h1 className='text-3xl font-bold text-[#daba80]'>Battle</h1>
            </Link>
            <Link to={'/shop'} className='flex flex-col items-center justify-center p-4 border-4 border-[#2e2d2b] w-full h-full'>
                <h1 className='text-3xl font-bold text-[#daba80]'>Shop</h1>
            </Link>
            
        </div>
    </div>
  )
}

export default Sidebar
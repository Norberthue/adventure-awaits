import React from 'react'
import Stats from './Stats'
import type { Character } from '../../types/characters';
import { useUser } from '../../context/UserContext';
import SubStat from './SubStat';
import type { ClassType } from '../../types/characters';
interface StatsProps {
  title: string;
  title2: string;
  data: string | number;
  func?: (user:Character[], setUser: React.Dispatch<React.SetStateAction<Character[]>>) => void;
  func2: (classtype: ClassType) => number | undefined;
}

const StatCard = ({title, title2, data, func, func2}: StatsProps) => {
  const { user, setUser } = useUser();
    return (
    <div className='flex gap-4 justify-between items-center font-semibold text-xl pl-2 pr-2 pt-1 pb-1  border-2 border-[#2e2d2b] bg-dark-light rounded-lg'>
        <div className='flex flex-col  w-full'>
            <Stats title={title} data={data} />
            <SubStat title2={title2} func2={func2}/>
        </div>         
        {func && <button className=' cursor-pointer pl-3 pt-1 pb-1 pr-3 text-2xl hover:bg-text-y hover:text-components text-text-y active:bg-dark-light duration-200 bg-components rounded-lg' onClick={() => func(user, setUser)}>+</button>}
    </div>
  )
}

export default StatCard
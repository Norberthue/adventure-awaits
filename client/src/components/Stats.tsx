import React from 'react'
import { useUser } from '../context/UserContext'
import type { Character } from '../types/characters';
import { getDmg, getHp } from '../utils/characterStatsByClass';

interface StatsProps {
  title: string;
  data: string | number;
  func?: ( user:Character[], setUser: React.Dispatch<React.SetStateAction<Character[]>>) => void;
}

const Stats = ({title, data, func}: StatsProps) => {
    const  { user, setUser } = useUser();
    return (
    <div className='flex gap-2 justify-between items-center font-semibold text-xl pl-2 pr-2 pt-1 pb-1  border-2 border-[#2e2d2b] bg-dark-light rounded-lg'>
        <div className='flex flex-col  w-full'>
          <div className='flex text-[#dfdcd0] justify-between'>
            <p className=' '>{title}</p>
            <p className=''>{data}</p>
          </div>
          <div className='flex justify-between items-center'>
            {user[0].class === 'Warrior' && title === 'Strength' ? (<p className='text-text-y text-sm '>Damage</p>): (<div></div>)}
            <p className='text-text-y text-sm'>{getDmg(user[0].class)}</p>
          </div>
          
        </div>
        {func && <button className=' cursor-pointer pl-3 pt-1 pb-1 pr-3 text-2xl hover:bg-text-y hover:text-components text-text-y active:bg-dark-light duration-200 bg-components rounded-lg' onClick={() => func(user, setUser)}>+</button>}
    </div>
    )
}

export default Stats
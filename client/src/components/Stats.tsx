import React from 'react'
import { useUser } from '../context/UserContext'
import type { Character } from '../types/characters';

interface StatsProps {
  title: string;
  data: string | number;
  func?: ( user:Character[], setUser: React.Dispatch<React.SetStateAction<Character[]>>) => void;
}

const Stats = ({title, data, func}: StatsProps) => {
    const  { user, setUser } = useUser();
    return (
    <div className='flex items-center font-semibold text-xl pl-2 pr-2 pt-1 pb-1 justify-between border-2 border-[#2e2d2b] bg-dark-light rounded-lg'>
        <p className='text-[#b49c76]'>{title}</p>
        <p className='text-[#dfdcd0]'>{data}</p>
        {func && <button className='border-2 border-[#2e2d2b] pl-2 pr-2   bg-[#141313] rounded-lg' onClick={() => func(user, setUser)}>+</button>}
    </div>
    )
}

export default Stats
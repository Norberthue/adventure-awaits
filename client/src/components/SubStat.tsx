import React from 'react'
import Stats from './Stats'
import type { Character } from '../types/characters';
import { useUser } from '../context/UserContext';
import type { ClassType } from '../types/characters';

interface StatsProps {
  title2: string;
  data: string | number;
  func2: (classtype: ClassType) => number | undefined;
}

const SubStat = ({title2, data, func2}: StatsProps) => {
   const { user, setUser } = useUser();
 

  return (

    <div className='flex justify-between items-center'>
        <p className='text-text-y text-sm '>{title2}</p>
        <p className='text-text-y text-sm'>{func2(user[0].class)}</p>
    </div>
  )
}

export default SubStat
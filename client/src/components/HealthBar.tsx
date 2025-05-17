import React from 'react'
import { getHp } from '../utils/characterStatsByClass'
import type { ClassType } from "../types/characters"

interface HealthBarProps {
    classType: ClassType
}

const HealthBar = ({classType}: HealthBarProps) => {
  return (
    <div className='flex  bg-[#7eb671] relative rounded-lg w-60 h-8 items-center font-semibold justify-between text-xl  gap-2'>                          
        <p className='absolute left-1/2 -translate-x-1/2'>Hp {getHp(classType)}/{getHp(classType)}</p>
    </div>
)
}

export default HealthBar
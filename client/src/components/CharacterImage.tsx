import React from 'react'
import type { Character } from '../types/characters'
import { useUser } from '../context/UserContext'
interface CharacterImageProps {
  player: Character
  getMaxEpxForLevel: (level: number) => number
}

const CharacterImage = ({player, getMaxEpxForLevel}: CharacterImageProps) => {
  const { user } = useUser();
    return (
    <>
    
        <div className='relative'>
            <img src={user[0].image} alt="Character" className='object-cover w-full h-full border-4 border-border-gray rounded-t-2xl bg-border-dark' />
            <div className='absolute bottom-[5%] w-50 left-1/2 flex items-center justify-center   -translate-x-1/2 pt-1 pb-1 pl-3 pr-3 bg-slot rounded-xl border-2 border-border-gray '>
                <span className=' text-text-y text-2xl '>{player.name}</span>
            </div>
        </div>
        
        <div className="w-full relative bg-slot  border-l-4 z-50 border-r-4 border-border-gray h-10 ">
            <div
                className="bg-[#f6c945] transition-all duration-300"
                style={{
                    width: `${Math.min(100, (player.experience / getMaxEpxForLevel(player.level)) * 100)}%`
                }}
            >
                <div className="text-white text-sm absolute top-1/2 left-1/2 -translate-y-1/2    -translate-x-1/2">
                    <div className='group flex cursor-default gap-1 text-2xl relative'>
                        <span className=''>Level</span>
                        <span>{player.level}</span>
                        <div className='flex flex-col  opacity-0 group-hover:opacity-100 pointer-events-none cursor-default  min-w-[250px] rounded-2xl border-4 border-border-gray  p-4 bg-slot-transparent -top-4 absolute left-1/2 -translate-x-1/2 transition-all duration-300'>
                            <div className='flex justify-between'>
                                <div className='text-2xl text-text-y '>Exp</div>
                                <div className='text-2xl text-text-y '>{player.experience}</div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='text-2xl text-text-y '>Next level at</div>
                                <div className='text-2xl text-text-y '>{getMaxEpxForLevel(player.level)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CharacterImage
import React from 'react'
import type { Enemies } from '../types/enemies'

interface EnemyBattleCardProps {
    enemy: Enemies
}

const EnemyBattleCard = ({enemy}: EnemyBattleCardProps) => {
  return (
    <div className="flex flex-col items-center bg-[#222034] rounded-lg shadow-lg p-4 m-4 border-2 border-[#daba80]" key={enemy.level}>
        <h1 className="text-3xl font-extrabold text-[#daba80] mb-2 drop-shadow">{enemy.name}</h1>
        <h1 className="text-3xl font-extrabold text-[#daba80] mb-2 drop-shadow">{enemy.class}</h1>
        <h1> Level: <span className="font-semibold">{enemy.level}</span></h1>
        <img src={enemy.image} alt={enemy.class} className="w-32 h-32 rounded-full border-4 border-[#daba80] bg-[#181820] mb-3" />
        <div className="text-[#f3e9d2] text-base space-y-1 mb-2">
            <div className="grid grid-cols-2 gap-2">
                <div className="border-2 border-[#b89a5f] rounded-md p-2 bg-[#181820]">
                    <p>HP: <span className="font-semibold">{enemy.hp}</span></p>
                </div>
                <div className="border-2 border-[#b89a5f] rounded-md p-2 bg-[#181820]">
                    <p>Attack: <span className="font-semibold">{enemy.attack}</span></p>
                </div>
                <div className="border-2 border-[#b89a5f] rounded-md p-2 bg-[#181820]">
                    <p>Armor: <span className="font-semibold">{enemy.armor}</span></p>
                </div>
                <div className="border-2 border-[#b89a5f] rounded-md p-2 bg-[#181820]">
                    <p>Strength: <span className="font-semibold">{enemy.strength}</span></p>
                </div>
                <div className="border-2 border-[#b89a5f] rounded-md p-2 bg-[#181820]">
                    <p>Dexterity: <span className="font-semibold">{enemy.dexterity}</span></p>
                </div>
                <div className="border-2 border-[#b89a5f] rounded-md p-2 bg-[#181820]">
                    <p>Intelligence: <span className="font-semibold">{enemy.intelligence}</span></p>
                </div>
                <div className="border-2 border-[#b89a5f] rounded-md p-2 bg-[#181820]">
                    <p>Luck: <span className="font-semibold">{enemy.luck}</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EnemyBattleCard
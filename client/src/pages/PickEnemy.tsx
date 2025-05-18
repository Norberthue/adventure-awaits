import { makeEnemies } from "../utils/makeEnemies"
import { useUser } from "../context/UserContext"
import type { Enemies } from "../types/enemies"
import { useEffect, useState } from "react"


const PickEnemy = () => {
  const { user } = useUser()
  const [enemies, setEnemies] = useState<Enemies[]>([]) 

  useEffect(() => {
    setEnemies(makeEnemies(user[0].level) as Enemies[]) 
  },[])
  console.log(enemies)
  return (
    <div className="z-10 text-white">
      <div className="flex  items-center justify-center">
        {enemies.map((e) => {
          return (
            <div className="flex flex-col items-center bg-[#222034] rounded-lg shadow-lg p-4 m-4 border-2 border-[#daba80]" key={e.level}>
              <h1 className="text-3xl font-extrabold text-[#daba80] mb-2 drop-shadow">{e.class}</h1>
              <img src={e.image} alt={e.class} className="w-32 h-32 rounded-full border-4 border-[#daba80] bg-[#181820] mb-3" />
              <div className="text-[#f3e9d2] text-base space-y-1 mb-2">
              <p>Level: <span className="font-semibold">{e.level}</span></p>
              <p>HP: <span className="font-semibold">{e.hp}</span></p>
              <p>Attack: <span className="font-semibold">{e.attack}</span></p>
              <p>Armor: <span className="font-semibold">{e.armor}</span></p>
              <p>Strength: <span className="font-semibold">{e.strength}</span></p>
              <p>Dexterity: <span className="font-semibold">{e.dexterity}</span></p>
              <p>Intelligence: <span className="font-semibold">{e.intelligence}</span></p>
              <p>Luck: <span className="font-semibold">{e.luck}</span></p>
              </div>
              <button className="p-2 mt-2 w-full text-[#222034] font-bold bg-gradient-to-r from-[#daba80] to-[#b89a5f] rounded-md hover:from-[#b89a5f] hover:to-[#daba80] transition-colors">
              Pick Enemy
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PickEnemy

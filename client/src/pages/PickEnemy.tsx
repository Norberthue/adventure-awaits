import { makeEnemies } from "../utils/makeEnemies"
import { useUser } from "../context/UserContext"
import type { Enemies } from "../types/enemies"
import { useEffect, useState } from "react"
import BattleScene from "./BattleScene"
import Sidebar from "../components/Sidebar"


const PickEnemy = () => {
  const { user } = useUser()
  const [enemies, setEnemies] = useState<Enemies[]>([]) 
  const [enemy, setEnemy] = useState<Enemies | null>(null)
  useEffect(() => {
    setEnemies(makeEnemies(user[0].level) as Enemies[]) 
  },[])
  

  const chosenEnemy = (index: number) => {
    setEnemy(enemies[index]) 
    
  }
  return (
    <div className="grid grid-cols-12 gap-5 mt-5">
        <Sidebar/>
      <div className="col-span-10 pt-4 pb-4 pr-10 pl-10  h-[800px] rounded-2xl bg-components justify-center border-4 border-border-yellow">
        {!enemy ? (
          <div className="flex items-center justify-center">
          {enemies.map((e, index) => {
            return (
              <div className="flex flex-col items-center w-[300px]  rounded-lg shadow-lg m-4 " key={e.level}>
            
                <div className='relative w-full'>
                    <img src={e.image} alt="Character" className='object-cover w-full h-full border-b-4 border-t-4 border-l-4 border-r-4 border-border-gray rounded-t-2xl bg-border-dark' />
                    <div className='absolute gap-2 bottom-[5%] w-50 left-1/2 flex items-center justify-center -translate-x-1/2 pt-1 pb-1 pl-3 pr-3 bg-slot rounded-xl border-2 border-border-gray '>
                        <span className=' text-text-y text-2xl '>{e.name}</span>
                        <h1 className="text-text-y text-2xl flex gap-2"> Level: <span className="text-text-y text-2xl">{e.level}</span></h1>
                    </div>
                </div>
                
                <div className="flex w-full text-xl  border-b-4 border-l-4 border-r-4 p-2 text-white flex-col gap-5 border-border-gray bg-border-dark rounded-b-2xl">
                  <div className="border-2  border-border-gray rounded-md p-2 bg-dark-light">
                    <p className="flex justify-between items-center">Strength: <span className="font-semibold">{e.strength}</span></p>
                  </div>
                  <div className="border-2  border-border-gray rounded-md p-2 bg-dark-light">
                    <p className="flex justify-between items-center">Dexterity: <span className="font-semibold">{e.dexterity}</span></p>
                  </div>
                  <div className="border-2  border-border-gray rounded-md p-2 bg-dark-light">
                    <p className="flex justify-between items-center">Intelligence: <span className="font-semibold">{e.intelligence}</span></p>
                  </div>
                  <div className="border-2  border-border-gray rounded-md p-2 bg-dark-light">
                    <p className="flex justify-between items-center">Vitality: <span className="font-semibold">{e.vitality}</span></p>
                  </div>
                  <div className="border-2  border-border-gray rounded-md p-2 bg-dark-light">
                    <p className="flex justify-between items-center">Luck: <span className="font-semibold">{e.luck}</span></p>
                  </div>
                  <button onClick={() => chosenEnemy(index)} className=" text-2xl cursor-pointer p-2 mt-2 w-full text-[#222034] font-bold bg-gradient-to-r from-[#daba80] to-[#b89a5f] rounded-md hover:from-[#b89a5f] hover:to-[#daba80] duration-200 transition-colors">
                    Battle
                  </button>
                </div>
                
              </div>
            )
          })}
        </div>
        ) : (
          <BattleScene enemy={enemy}/>
        )}
        
      </div>
    </div>
  )
}

export default PickEnemy

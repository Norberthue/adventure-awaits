import { makeEnemies } from "../utils/makeEnemies"
import { useUser } from "../context/UserContext"
import type { Enemies } from "../types/enemies"
import { useEffect, useState } from "react"
import BattleScene from "./BattleScene"
import Sidebar from "../components/Sidebar"
import BattleStats from "../components/battle/BattleStats"
import BattleImage from "../components/battle/BattleImage"


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
            
                <BattleImage image={e.image} name={e.name} level={e.level}/>
                
                <div className="flex w-full text-xl font-semibold  border-b-4 border-l-4 border-r-4 p-3 pt-4 pb-4 text-white flex-col gap-5 border-border-gray bg-border-dark rounded-b-2xl">
                  <BattleStats title={'Strength'} data={e.strength}/>
                  <BattleStats title={'Dexterity'} data={e.dexterity}/>
                  <BattleStats title={'Intelligence'} data={e.intelligence}/>
                  <BattleStats title={'Vitality'} data={e.vitality}/>
                  <BattleStats title={'Luck'} data={e.luck}/>
                  <button onClick={() => chosenEnemy(index)} className=" text-2xl cursor-pointer p-2 mt-2 w-full text-text-y font-bold bg-dark-light hover:text-dark-light hover:bg-text-y  rounded-md  duration-200 transition-colors">
                    Battle
                  </button>
                </div>
              </div>
            )
          })}
        </div>
        ) : (
          <BattleScene enemy={enemy} setEnemy={setEnemy}/>
        )}
        
      </div>
    </div>
  )
}

export default PickEnemy

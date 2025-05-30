
import { useUser } from '../context/UserContext'
import { getDmg, getHp } from '../utils/characterStatsByClass'
const PlayerBattleCard = () => {
  const { user } = useUser()
    return (
    <div className="flex flex-col items-center bg-border-dark rounded-lg shadow-lg p-4 m-4 border-2 border-[#daba80]" key={user[0].level}>
        <h1 className="text-3xl font-extrabold text-[#daba80] mb-2 drop-shadow">{user[0].name}</h1>
        <h1 className="text-3xl font-extrabold text-[#daba80] mb-2 drop-shadow">{user[0].class}</h1>
        <h1> Level: <span className="font-semibold">{user[0].level}</span></h1>
        <img src={user[0].image} alt={user[0].class} className="w-32 h-32 rounded-full border-4 border-[#daba80] bg-[#181820] mb-3" />
        <div className="text-[#f3e9d2] text-base space-y-1 mb-2">
            <div className="grid grid-cols-2 gap-2">
                <div className="border-2 border-[#b89a5f] rounded-md p-2 bg-[#181820]">
                    <p>HP: <span className="font-semibold">{getHp(user[0].class)}</span></p>
                </div>
                <div className="border-2 border-[#b89a5f] rounded-md p-2 bg-[#181820]">
                    <p>Attack: <span className="font-semibold">{getDmg(user[0].class)}</span></p>
                </div>
                <div className="border-2 border-[#b89a5f] rounded-md p-2 bg-[#181820]">
                    <p>Armor: <span className="font-semibold">{user[0].armor}</span></p>
                </div>
                <div className="border-2 border-[#b89a5f] rounded-md p-2 bg-[#181820]">
                    <p>Strength: <span className="font-semibold">{user[0].strength}</span></p>
                </div>
                <div className="border-2 border-[#b89a5f] rounded-md p-2 bg-[#181820]">
                    <p>Dexterity: <span className="font-semibold">{user[0].dexterity}</span></p>
                </div>
                <div className="border-2 border-[#b89a5f] rounded-md p-2 bg-[#181820]">
                    <p>Intelligence: <span className="font-semibold">{user[0].intelligence}</span></p>
                </div>
                <div className="border-2 border-[#b89a5f] rounded-md p-2 bg-[#181820]">
                    <p>Luck: <span className="font-semibold">{user[0].luck}</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayerBattleCard
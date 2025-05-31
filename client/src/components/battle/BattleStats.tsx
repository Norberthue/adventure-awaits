
interface BattleStatsProps {
    title: string;
    data: number;
}

const BattleStats = ({title, data}:BattleStatsProps) => {
  return (
    <div className="border-2 text-2xl  border-border-gray rounded-2xl p-2 bg-dark-light">
        <p className="flex justify-between items-center">{title}: <span className="font-semibold">{data}</span></p>
    </div>
)
}

export default BattleStats
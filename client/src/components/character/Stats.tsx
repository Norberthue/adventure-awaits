
interface StatsProps {
  title: string;
  data: string | number;
}

const Stats = ({title, data}: StatsProps) => {
    return (
          <div className='flex text-[#dfdcd0] justify-between'>
            <p className=''>{title}</p>
            <p className=''>{data}</p>
          </div>
    )
}

export default Stats
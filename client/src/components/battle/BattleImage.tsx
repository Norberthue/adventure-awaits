
interface BattleImageProps {
    image:string;
    name:string;
    level:number;
    classType:string;
}

const BattleImage = ({ image, name, level, classType }:BattleImageProps) => {
  return (
    <div className='relative w-full'>
        <img src={image} alt="Character" className='object-cover w-full h-full border-b-4 border-t-4 border-l-4 border-r-4 border-border-gray rounded-t-2xl bg-border-dark' />
        <div className='absolute gap-2 bottom-[5%] w-65 left-1/2 flex items-center justify-center -translate-x-1/2 pt-1 pb-1 pl-3 pr-3 bg-slot rounded-xl border-2 border-border-gray '>
            <span className='text-text-y text-xl '>{name}</span>
            <h1 className="text-text-y text-xl flex gap-2"> Level: <span className="text-text-y ">{level}</span></h1>
            <h1 className="text-text-y text-xl">{classType}</h1>
        </div>
    </div>
  )
}

export default BattleImage
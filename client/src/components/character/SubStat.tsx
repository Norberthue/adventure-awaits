import { useUser } from '../../context/UserContext';
import type { Character, ClassType } from '../../types/characters';

interface StatsProps {
  title2: string;
  func2: (classtype: ClassType, user:Character[]) => number | undefined;
}

const SubStat = ({title2,  func2}: StatsProps) => {
   const { user } = useUser();

  return (

    <div className='flex justify-between items-center'>
        <p className='text-text-y text-sm '>{title2}</p>
        <p className='text-text-y text-sm'>{func2(user[0].class, user)}</p>
    </div>
  )
}

export default SubStat
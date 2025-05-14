import { useState } from "react"
import axios from "axios"
import type { Character, ClassType } from "../types/characters"

const CharacterCreate = () => {
    const [name, setName] = useState('');
    const [classType, setClassType] = useState<ClassType>('Warrior');
    const [userId, setUserId] = useState('123');
    const []


    return (
    <div>CharacterCreate</div>
  )
}

export default CharacterCreate
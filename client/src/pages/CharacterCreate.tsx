import { useState } from "react"
import axios from "axios"
import type { Character, ClassType } from "../types/characters"
import con1Image from '../assets/heroes/con1.png';
import con2Image from '../assets/heroes/con2.png';
import con3Image from '../assets/heroes/con3.png';  
import con4Image from '../assets/heroes/con4.png';
import con5Image from '../assets/heroes/con5.png';
import con6Image from '../assets/heroes/con6.png';
import con7Image from '../assets/heroes/con7.png';
import con8Image from '../assets/heroes/con8.png';
import con9Image from '../assets/heroes/con9.png';

const characterImages = [
    con1Image,
    con2Image,
    con3Image,
    con4Image,
    con5Image,
    con6Image,
    con7Image,
    con8Image,
    con9Image,
];
const CharacterCreate = () => {
    const [classType, setClassType] = useState<ClassType>('Warrior');
    const [userId, setUserId] = useState('123');
    const [image, setImage] = useState('')
    const [createdCharacter, setCreatedCharacter] = useState<Character | null>(null);
    const [error, setError] = useState('')
    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault()
        try {
            const response = await axios.post<{character: Character}>(
                'http://localhost:8080/create', 
                { userId, classType, image}
            );
            setCreatedCharacter(response.data.character)
        } catch (err: any) {
            setError(err.response?.data?.message || 'Character creation failed')
        }
    }

    return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-900 rounded-xl shadow text-white">
      <h2 className="text-2xl font-bold mb-4">Create a Character</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          value={classType}
          onChange={(e) => setClassType(e.target.value as ClassType)}
          className="w-full p-2 bg-gray-800 rounded border border-gray-600"
        >
          <option value="Warrior">Warrior</option>
          <option value="Mage">Mage</option>
          <option value="Archer">Archer</option>
        </select>
        
        <div>
          <h2>Choose character</h2>
          <div className="grid grid-cols-3 gap-10">
            {characterImages.map((img, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={img}
                  alt={`Character ${index + 1}`}
                  className={`w-full h-full cursor-pointer ${image === img ? 'border-2 border-blue-500' : ''}`}
                  onClick={() => setImage(img)}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition py-2 rounded font-semibold"
        >
          Create Character
        </button>
      </form>


      {createdCharacter && (
        <div className="mt-6 p-4 bg-green-800 rounded">
          <p className="font-semibold">Character Created:</p>
          <p>Name: {createdCharacter.name}</p>
          <p>Class: {createdCharacter.class}</p>
          <p>Level: {createdCharacter.level}</p>
        </div>
      )}

      {error && (
        <p className="mt-4 text-red-400">
          ⚠️ {error}
        </p>
      )}
    </div>
  )
}

export default CharacterCreate
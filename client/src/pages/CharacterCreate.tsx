import { useState } from "react"
import axios from "axios"
import type { Character, ClassType } from "../types/characters"

const CharacterCreate = () => {
    const [name, setName] = useState('');
    const [classType, setClassType] = useState<ClassType>('Warrior');
    const [userId, setUserId] = useState('123');
    const [createdCharacter, setCreatedCharacter] = useState<Character | null>(null);
    const [error, setError] = useState('')

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault()
        
        try {
            const response = await axios.post<{character: Character}>(
                'http://localhost:8080/character/create', 
                { userId, name, classType}
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
        <input
          type="text"
          placeholder="Enter character name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 bg-gray-800 rounded border border-gray-600"
          required
        />
        <select
          value={classType}
          onChange={(e) => setClassType(e.target.value as ClassType)}
          className="w-full p-2 bg-gray-800 rounded border border-gray-600"
        >
          <option value="Warrior">Warrior</option>
          <option value="Mage">Mage</option>
          <option value="Archer">Archer</option>
        </select>
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
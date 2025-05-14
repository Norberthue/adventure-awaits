import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import type { ClassType } from "../types/characters"
import { useUser } from '../context/UserContext'; // Adjust the path based on your project structure
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

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [classType, setClassType] = useState<ClassType>('Warrior');
  const [image, setImage] = useState('')
  
  const { setUser } = useUser();

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post('http://localhost:8080/register', {
        email,
        name,
        password,
        classType, 
        image
      });
      setUser(res.data.newUser.character)
      localStorage.setItem('user', JSON.stringify(res.data.newUser.character))
      navigate('/characterOverview');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-900 rounded-xl shadow text-white">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
          required
        />
        <div>
          <h2>Choose Class</h2>
          <select
            value={classType}
            onChange={(e) => setClassType(e.target.value as ClassType)}
            className="w-full p-2 bg-gray-800 rounded border border-gray-600"
          >
            <option value="Warrior">Warrior</option>
            <option value="Mage">Mage</option>
            <option value="Archer">Archer</option>
          </select>
        </div>

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
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold"
        >
          Register
        </button>
      </form>
      <p className='flex items-center justify-center mt-4 gap-1'>If you already have an account <Link to={'/'}><span className='text-blue-400 underline underline-offset-2 hover:text-blue-600'>Login</span></Link></p>
      {error && <p className="mt-4 text-red-400">⚠️ {error}</p>}
    </div>
  );
};

export default Register;
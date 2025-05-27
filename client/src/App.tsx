import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Shop from './pages/Shop';
import PickEnemy from './pages/PickEnemy';
import CharacterOverview from './pages/CharacterOverview';
import ProtectedRoute from './components/ProtectedRoute';

const BASE_WIDTH = 1540;
const BASE_HEIGHT = 1024;

const App: React.FC = () => {
  const [scale, setScale] = useState(1);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const updateScale = () => {
      const scaleW = window.innerWidth / BASE_WIDTH;
      const scaleH = window.innerHeight / BASE_HEIGHT;
      const newScale = Math.min(scaleW, scaleH);
  
      setScale(newScale);

      // Centering offsets
      const newOffsetX = (window.innerWidth - BASE_WIDTH * newScale) / 2;
      const newOffsetY = (window.innerHeight - BASE_HEIGHT * newScale) / 2;
      setOffsetX(newOffsetX);
      setOffsetY(newOffsetY);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div className="w-screen h-screen bg-black overflow-hidden fixed top-0 left-0 z-50">
      <div
        style={{
          width: `${BASE_WIDTH}px`,
          height: `${BASE_HEIGHT}px`,
          transform: `translate(${offsetX}px, ${offsetY}px) scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        <div className="w-[1540px] h-[1000px] p-4 mt-2 rounded-2xl mb-2 bg-dark-light flex flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/pickEnemy" element={<ProtectedRoute><PickEnemy /></ProtectedRoute>} />
            <Route path="/shop" element={<ProtectedRoute><Shop /></ProtectedRoute>} />
            <Route path="/characterOverview" element={<ProtectedRoute><CharacterOverview /></ProtectedRoute>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;

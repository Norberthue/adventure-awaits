
import {Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import CharacterOverview from './pages/CharacterOverview';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import PickEnemy from './pages/PickEnemy';
import Shop from './pages/Shop';

function App() {
  
  return (
    <div className='max-w-[1440px] max-h-[1024px] w-full h-full mx-auto bg-dark flex flex-col'>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/pickEnemy" 
        element={
          <ProtectedRoute>
            <PickEnemy/>
          </ProtectedRoute>
          }
        />

        <Route path='/shop' 
        element={
          <ProtectedRoute>
            <Shop/>
          </ProtectedRoute>
          }
        />

        <Route path="/characterOverview" 
        element={
          <ProtectedRoute>
            <CharacterOverview/>
          </ProtectedRoute>
          } 
        />
      </Routes>
    </div>
    
  );
}

export default App;

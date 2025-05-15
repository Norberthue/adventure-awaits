
import {Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import CharacterOverview from './pages/CharacterOverview';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/characterOverview" 
        element={
          <ProtectedRoute>
            <CharacterOverview/>
          </ProtectedRoute>
          } 
        />
      </Routes>
    
  );
}

export default App;

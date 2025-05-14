
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterCreate from './pages/CharacterCreate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/create" element={<CharacterCreate />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Login from './pages/Login';
import Stats from './pages/Stats';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/login" element={<Login />} />
      <Route path="/stats" element={<Stats />} />
    </Routes>
  );
}

export default App;

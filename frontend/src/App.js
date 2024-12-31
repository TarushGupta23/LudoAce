import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LudoBoard from './components/Ludoboard';
import './index.css';
import { Login } from './pages/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/game" element={<LudoBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/Navbar';
import Signup from './pages/signup/Signup';
import Sigin from './pages/sigin/Sigin';

const name = "david"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Signup />} />
        <Route path="signup" element={< Sigin />} />
        {/* <Route path="todo" element={<TodoPage />} /> */}
      </Routes>
      <NavBar />
    </div>
  );
}

export default App;
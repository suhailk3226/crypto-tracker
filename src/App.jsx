import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Coin from './pages/Coin';

const App = () => {
  return (
    <div className="app w-full min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/crypto-tracker" element={<Home />} />
        <Route path="/crypto-tracker/coin/:coinId" element={<Coin />} />
      </Routes>
    </div>
  );
};

export default App;

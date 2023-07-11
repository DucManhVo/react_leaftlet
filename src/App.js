import React from 'react';
import Map from './pages/Map';
import { Routes, Route } from "react-router-dom";
import CRUDPage from './pages/CRUDPage';
import AddPage from './pages/AddPage';
import ChartsPage from './pages/ChartsPage';





function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/tables_device" element={<CRUDPage />} />
        <Route path="/add_device" element={<AddPage />} />
        <Route path="/charts_device" element={<ChartsPage />} />
      </Routes>
    </div>
  );
}

export default App;

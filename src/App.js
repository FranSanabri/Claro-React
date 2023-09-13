import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Store from './components/Store/Store';
import PasateAClaro from './components/PasateAClaro/PasateAClaro';
import PackYa from './components/PackYa/PackYa';
import Ayuda from './components/Ayuda/Ayuda';
import Servicios from './components/Servicios/Servicios'; // Importa el nuevo componente "Servicios"
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/tienda" element={<Store />} />
        <Route path="/pasate-a-claro" element={<PasateAClaro />} />
        <Route path="/pack-ya" element={<PackYa />} />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route path="/servicios" element={<Servicios />} /> {/* Nueva ruta para "Servicios" */}
      </Routes>
    </div>
  );
}

export default App;

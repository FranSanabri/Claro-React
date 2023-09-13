import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'; // Asegúrate de importar el componente Navigate
import Navbar from './components/Navbar/Navbar';
import Store from './components/Store/Store';
import PasateAClaro from './components/PasateAClaro/PasateAClaro';
import PackYa from './components/PackYa/PackYa';
import Ayuda from './components/Ayuda/Ayuda';
import Servicios from './components/Servicios/Servicios';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/tienda" element={<Store />} />
        <Route path="/pasate-a-claro" element={<PasateAClaro />} />
        <Route path="/pack-ya" element={<PackYa />} />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route path="/servicios" element={<Servicios />} />
        {/* Agrega una redirección desde la ruta raíz ("/") a "/servicios" */}
        <Route path="/" element={<Navigate to="/servicios" />} />
      </Routes>
    </div>
  );
}

export default App;

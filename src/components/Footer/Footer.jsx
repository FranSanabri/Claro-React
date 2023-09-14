import React, { useState } from 'react';
import './Footer.css'; // Asegúrate de importar tu archivo de estilos

const Footer = () => {
  // Define un estado inicial para mantener un seguimiento de si cada sección está abierta o cerrada
  const [sectionsOpen, setSectionsOpen] = useState({
    servicios: false,
    accesos: false,
    promociones: false,
    ayuda: false,
    institucional: false,
  });

  // Función para manejar el clic en los títulos y cambiar el estado de las secciones
  const toggleSection = (section) => {
    setSectionsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <footer className="footer">
      <div className="footer-section">
        <h4 onClick={() => toggleSection('servicios')}>Servicios para tu celu y tu casa</h4>
        <ul className={sectionsOpen['servicios'] ? '' : 'mobile-collapse'}>
          <li>Portabilidad: Pasate a Claro</li>
          <li>Planes para tu celu</li>
          <li>Contenidos</li>
          <li>Packs de Internet</li>
          <li>Roaming para tu viaje</li>
          <li>Planes para tu casa</li>
        </ul>
      </div>
<hr className='hr-footer' />
      <div className="footer-section">
        <h4 onClick={() => toggleSection('accesos')}>Accesos útiles</h4>
        <ul className={sectionsOpen['accesos'] ? '' : 'mobile-collapse'}>
          <li>Mi Claro</li>
          <li>Packs Ya</li>
          <li>Claro club</li>
          <li>Claro video</li>
          <li>Claro música</li>
          <li>Claro drive</li>
          <li>Claro Pay</li>
          <li>Tienda de celulares</li>
        </ul>
      </div>
      <hr className='hr-footer' />
      <div className="footer-section">
        <h4 onClick={() => toggleSection('promociones')}>Promociones en Celulares y Accesorios</h4>
        <ul className={sectionsOpen['promociones'] ? '' : 'mobile-collapse'}>
          <li>Tienda de accesorios</li>
          <li>Para tu celu</li>
          <li>Wearables</li>
          <li>Premium</li>
          <li>Audio</li>
          <li>Gaming</li>
          <li>Smart Home</li>
          <li>Todos</li>
        </ul>
      </div>
      <hr className='hr-footer' />
      <div className="footer-section">
        <h4 onClick={() => toggleSection('ayuda')}>Ayuda</h4>
        <ul className={sectionsOpen['ayuda'] ? '' : 'mobile-collapse'}>
          <li>Consultas</li>
          <li>Teléfonos</li>
          <li>Sucursales</li>
          <li>Lugares y medios de pago</li>
          <li>Calificá nuestro sitio</li>
          <li>Cobertura</li>
        </ul>
      </div>
      <hr className='hr-footer' />
      <div className="footer-section">
        <h4 onClick={() => toggleSection('institucional')}>Institucional</h4>
        <ul className={sectionsOpen['institucional'] ? '' : 'mobile-collapse'}>
          <li>BOTÓN DE BAJA DE SERVICIO | BOTÓN DE ARREPENTIMIENTO</li>
          <li>CONTRATOS DE ADHESIÓN - LEY NRO. 24.240 DE DEFENSA DEL CONSUMIDOR</li>
          <li>La portabilidad es tu derecho</li>
          <li>Trabajá con nosotros</li>
          <li>Proveedores</li>
          <li>Concursos</li>
          <li>Portal de denuncias</li>
          <li>Portal interferencias</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

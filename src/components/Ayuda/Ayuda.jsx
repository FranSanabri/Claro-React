import React from 'react';
import './Ayuda.css'; // Asegúrate de importar tus estilos
import Footer from '../Footer/Footer';

const Ayuda = () => {
  return (
    <div>
      {/* Banner con título "ASISTENCIA" */}
      <div className="asistencia-banner">
        <h2 className="asistencia-title">ASISTENCIA</h2>
        <p className="asistencia-subtitle">Preguntas Frecuentes</p>
        <div className="asistencia-divider bar-red"></div> {/* Línea roja debajo del banner */}
      </div>

      {/* Sección de elementos en color azul y celeste */}
      <div className="help-section">
        <div className="help-item">
          <div className="item-heading">FACTURA</div>
           {/* Línea azul al lado del texto */}
          <div className="item-divider"></div>
        </div>

        {/* Repite este bloque para los otros elementos */}
        <div className="help-item">
          <div className="item-heading">SERVICIOS EN TU CELU</div>
          {/* Línea azul al lado del texto */}
          <div className="item-divider"></div>
        </div>

        <div className="help-item">
          <div className="item-heading">SERVICIOS EN TU CASA</div>
          {/* Línea azul al lado del texto */}
          <div className="item-divider"></div>
        </div>

        <div className="help-item">
          <div className="item-heading">AUTOGESTION MI CLARO</div>
          {/* Línea azul al lado del texto */}
          <div className="item-divider"></div>
        </div>

        <div className="help-item">
          <div className="item-heading">CELULARES Y ACCESORIOS</div>
          {/* Línea azul al lado del texto */}
          <div className="item-divider"></div>
        </div>

        
        <div className="help-item">
          <div className="item-heading">OTROS SERVICIOS</div>
          {/* Línea azul al lado del texto */}
          <div className="item-divider"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ayuda;
